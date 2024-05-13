// This file is generated by scripts/generate-child-node-keys.js.
// Do not edit this file directly.

export const childNodeKeys: Record<string, string[]> = {
	ArrayExpression: ['elements'],
	ArrayPattern: ['elements'],
	ArrowFunctionExpression: ['params', 'body'],
	AssignmentExpression: ['left', 'right'],
	AssignmentPattern: ['left', 'right'],
	AwaitExpression: ['argument'],
	BinaryExpression: ['left', 'right'],
	BlockStatement: ['body'],
	BreakStatement: ['label'],
	CallExpression: ['callee', 'arguments'],
	CatchClause: ['param', 'body'],
	ChainExpression: ['expression'],
	ClassBody: ['body'],
	ClassDeclaration: ['decorators', 'id', 'superClass', 'body'],
	ClassExpression: ['decorators', 'id', 'superClass', 'body'],
	ConditionalExpression: ['test', 'consequent', 'alternate'],
	ContinueStatement: ['label'],
	DebuggerStatement: [],
	Decorator: ['expression'],
	DoWhileStatement: ['body', 'test'],
	EmptyStatement: [],
	ExportAllDeclaration: ['exported', 'source', 'attributes'],
	ExportDefaultDeclaration: ['declaration'],
	ExportNamedDeclaration: ['specifiers', 'source', 'attributes', 'declaration'],
	ExportSpecifier: ['local', 'exported'],
	ExpressionStatement: ['expression'],
	ForInStatement: ['left', 'right', 'body'],
	ForOfStatement: ['left', 'right', 'body'],
	ForStatement: ['init', 'test', 'update', 'body'],
	FunctionDeclaration: ['id', 'params', 'body'],
	FunctionExpression: ['id', 'params', 'body'],
	Identifier: [],
	IfStatement: ['test', 'consequent', 'alternate'],
	ImportAttribute: ['key', 'value'],
	ImportDeclaration: ['specifiers', 'source', 'attributes'],
	ImportDefaultSpecifier: ['local'],
	ImportExpression: ['source', 'options'],
	ImportNamespaceSpecifier: ['local'],
	ImportSpecifier: ['imported', 'local'],
	JSXAttribute: ['name', 'value'],
	JSXClosingElement: ['name'],
	JSXClosingFragment: [],
	JSXElement: ['openingElement', 'children', 'closingElement'],
	JSXEmptyExpression: [],
	JSXExpressionContainer: ['expression'],
	JSXFragment: ['openingFragment', 'children', 'closingFragment'],
	JSXIdentifier: [],
	JSXMemberExpression: ['object', 'property'],
	JSXNamespacedName: ['namespace', 'name'],
	JSXOpeningElement: ['name', 'attributes'],
	JSXOpeningFragment: [],
	JSXSpreadChild: ['expression'],
	JSXText: [],
	LabeledStatement: ['label', 'body'],
	Literal: [],
	LogicalExpression: ['left', 'right'],
	MemberExpression: ['object', 'property'],
	MetaProperty: ['meta', 'property'],
	MethodDefinition: ['decorators', 'key', 'value'],
	NewExpression: ['callee', 'arguments'],
	ObjectExpression: ['properties'],
	ObjectPattern: ['properties'],
	PanicError: [],
	ParseError: [],
	PrivateIdentifier: [],
	Program: ['body'],
	Property: ['key', 'value'],
	PropertyDefinition: ['decorators', 'key', 'value'],
	RestElement: ['argument'],
	ReturnStatement: ['argument'],
	SequenceExpression: ['expressions'],
	SpreadElement: ['argument'],
	StaticBlock: ['body'],
	Super: [],
	SwitchCase: ['test', 'consequent'],
	SwitchStatement: ['discriminant', 'cases'],
	TaggedTemplateExpression: ['tag', 'quasi'],
	TemplateElement: [],
	TemplateLiteral: ['quasis', 'expressions'],
	ThisExpression: [],
	ThrowStatement: ['argument'],
	TryStatement: ['block', 'handler', 'finalizer'],
	UnaryExpression: ['argument'],
	UpdateExpression: ['argument'],
	VariableDeclaration: ['declarations'],
	VariableDeclarator: ['id', 'init'],
	WhileStatement: ['test', 'body'],
	YieldExpression: ['argument']
};
