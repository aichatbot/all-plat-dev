import React from 'react';
import {
    DiagramEngine, DiagramModel, DefaultNodeModel, DiagramWidget,
} from 'storm-react-diagrams';

import fs from 'fs';
import electron, { ipcRenderer } from 'electron';
const { dialog } = electron.remote;


const App = () => {
    const engine = new DiagramEngine();
    engine.installDefaultFactories();
    const model = new DiagramModel();
    engine.setDiagramModel(model);

    const plus = () => {
        const title = document.querySelector('#title').value;
        const node = new DefaultNodeModel(title, 'rgb(0,192,255)');
        node.addInPort(' ');
        node.addOutPort(' ');
        model.addNode(node);
        engine.repaintCanvas();
    };

    const save = async () => {
        const str = JSON.stringify(model.serializeDiagram());
        const filename = '新导图.mm';
        const filters = [
            {
                name: filename,
                extensions: ['mm'],
            },
        ];
        const result = await dialog.showSaveDialog({
            filters,
            defaultPath: filename,
            title: '导出',
            buttonLabel: '导出',
        });
        fs.writeFileSync(result.filePath, str, 'utf8');
    };

    const load = async () => {
        const result = await dialog.showOpenDialog({
            filters: [
                {
                    name: '思维导图文件',
                    extensions: ['mm'],
                },
            ],
            properties: ['openFile'],
            message: '选择要导入的思维导图文件',
            buttonLabel: '导入',
        });
        const str = fs.readFileSync(result.filePaths[0], 'utf8');
        model.deSerializeDiagram(JSON.parse(str), engine);
        engine.repaintCanvas();
    };

    ipcRenderer.on('menu', (e, cmd) => {
        if (cmd === 'load') {
            load();
        } else if (cmd === 'save') {
            save();
        }
    });

    return (
        <>
            <div className="btn-group">
                <button type="button" className="btn btn-default" onClick={() => load()}>
                    <span className="icon icon-folder" />
                </button>
                <button type="button" className="btn btn-default" onClick={() => save()}>
                    <span className="icon icon-floppy" />
                </button>
            </div>

            <div style={{ display: 'inline', marginLeft: 10 }}>
                <input type="text" id="title" placeholder="请输入节点标题" style={{ height: 24 }} />
                <button type="button" className="btn btn-default" onClick={() => plus()}>
                    <span className="icon icon-lamp" />
                </button>
            </div>
            <DiagramWidget
                className="dicCanvas"
                diagramEngine={engine}
            />
        </>
    );
}

export default App;