import { QMessageBox, ButtonRole, QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QInputDialog, QGridLayout, WidgetEventTypes, QAction } from '@nodegui/nodegui';

const CONTAINER = {
    main() { ; } };

import("./index.js").then(module => {


    CONTAINER['main'] = module.mainT;
    CONTAINER.main();
    


});