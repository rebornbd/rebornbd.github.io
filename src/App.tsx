import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './pages/home';
import { About } from './pages/about';
import { Contact } from './pages/contact';
// import { Project, ViewProject } from './modules/project';
import { Project } from './pages/project';
import { Skill } from './pages/skill';
import { Notfound } from './pages/notfound';
import { Layout } from './layout';


const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/"   component={() => <Home />} />
          <Route path="/about"    component={() => <About />} />
          <Route path="/contact"  component={() => <Contact />} />
          {/* <Route path="/project/:projectName"  component={() => <ViewProject />} /> */}
          <Route path="/project"  component={() => <Project />} />
          <Route path="/skill"    component={() => <Skill />} />
          <Route path="/*"        component={() => <Notfound />} />
        </Switch>
      </Layout>
    </>
  )
}

export default App;
