sap.ui.define(['sap/ui/core/Core', 'sap/ui/core/library'], function(Core, coreLib) {
	"use strict";
	sap.ui.getCore().initLibrary({
		name: 'testlibs.scenario8.lib1',
		dependencies: [
		],
		noLibraryCSS: true
	});
	return testlibs.scenario8.lib1; // eslint-disable-line no-undef
});