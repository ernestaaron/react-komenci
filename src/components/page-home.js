import React from 'react';

const HomePage = () => {
  return (
    <div className="row column">
      <h1>react-komenci</h1>

      <p><em>ReactJS</em> starter kit wrapping the minimum number of dependencies needed to build real world applications.</p>
      <p>It also include a great number of development features, making it easy to build, debug, and deploy your code</p>

      <div>
        <h3>Usage</h3>

        <p>Preferably you should use the <a href="https://www.npmjs.com/package/react-komenci-cli">komenci cli tool</a> to easly bootstrap a <em>ReactRS</em> application with only the features you require. To use the cli tool follow the installation/usage instructions at the <a href="https://www.npmjs.com/package/react-komenci-cli">komenci cli tool project</a> page.</p>

        <p>Alternativaly you can clone/download this projectas it is, modify the <i>package.json</i> and ajust the source code as needed.</p>
      </div>

      <div>
        <h3>Dependencies</h3>

        <p><i>ReactJS</i> by itself is not a full framework, therefore in order to build real world applications you will most certanly need some extra packages. While most of the extra packages you will install will depend on the nature of your application, there are a few standard ones that most applications use. <em>react-komenci</em> bundles the minimal packages that will support you when building your application.</p>

        <ul>
          <li><a href="https://github.com/facebook/react">React</a> - [<i>from reactjs core</i>] main reactJS library</li>
          <li><a href="https://github.com/facebook/react">ReactDom</a> - [<i>from reactjs core</i>] entry point of the DOM-related rendering path (required by reactJS)</li>
          <li><a href="https://github.com/reactjs/react-router">React-Router</a> - complete routing library for ReactJS</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
