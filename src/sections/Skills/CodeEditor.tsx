import Typewriter from 'typewriter-effect';

interface Props {
	skill: 'Web' | 'Mobile' | 'Others';
}

const CodeEditor = ({ skill }: Props) => {
	return (
		<div className="m-2 text-lg">
			<Typewriter
				options={{
					strings: CODES[skill].code,
					autoStart: true,
					delay: 25,
					loop: true
				}}
			/>
		</div>
	);
};

const CODES = {
	Web: {
		code: [
			`
            <span style="color: #ff7b72">import</span> React <span style="color: #ff7b72">from</span> <span style="color: #84d6ff">'react'</span>;<br/>
            <span style="color: #ff7b72">import</span> <span style="color: #84d6ff">{</span> useState <span style="color: #84d6ff">}</span> <span style="color: #ff7b72">from</span> <span style="color: #84d6ff">'react'</span>;<br/>
            <br/>
            <span style="color: #ff7b72">function</span> <span style="color: #d2a8ff">App</span><span style="color: #84d6ff">()</span> <span style="color: #84d6ff">{</span><br/>
            <span style="color: #ff7b72">const</span> <span style="color: #147add">[</span><span style "color: #147add">count</span><span style="color: #147add">,</span> setCount<span style="color: #469823">]</span> <span style="color: #ff7b72">=</span> useState<span style="color: #84d6ff">(</span>0<span style="color: #84d6ff">)</span>;<br/>
            <br/>
            <span style="color: #ff7b72">{'\t'}return</span> <span style="color: #84d6ff">(</span><br/>
            <span style="color: #ff7b72">{'\t\t'}&lt;<span style="color: #84d6ff">div</span>&gt;</span><br/>
            <span style="color: #ff7b72">{'\t\t\t'}&lt;<span style="color: #84d6ff">button</span> <span style="color: #84d6ff">onClick</span><span style="color: #84d6ff">=</span><span style="color: #84d6ff">{'{'}</span>() <span style="color: #ff7b72">=&gt;</span> setCount<span style="color: #84d6ff">(</span>count <span style="color: #ff7b72">+</span> 1<span style="color: #84d6ff">)</span><span style="color: #84d6ff">{'}'}</span>&gt;</span>Click me!<span style="color: #ff7b72">&lt;/</span><span style="color: #84d6ff">button</span>&gt;</span><br/>
            <span style="color: #ff7b72">{'\t\t\t'}&lt;<span style="color: #84d6ff">p</span>&gt;</span>You clicked {<span style="color: #ff7b72">{'{'}</span>count<span style="color: #ff7b72">{'}'}</span>} times<span style="color: #ff7b72">&lt;/</span><span style="color: #84d6ff">p</span>&gt;</span><br/>
            <span style="color: #ff7b72">{'\t\t'}&lt;/<span style="color: #84d6ff">div</span>&gt;</span><br/>
            <span style="color: #ff7b72">{'\t'}</span><span style="color: #84d6ff">)</span>;<br/>
            <span style="color: #ff7b72">{'}'}</span><br/>
            <br/>
            <span style="color: #ff7b72">export default</span> App;
        `
		]
	},
	Mobile: {
		code: [``]
	},
	Others: {
		code: [``, ``]
	}
};

export default CodeEditor;
