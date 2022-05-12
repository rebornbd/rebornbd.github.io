import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from './modules/home';
import { About } from './modules/about';
import { Contact } from './modules/contact';
import { Project, ViewProject } from './modules/project';
import { Skill } from './modules/skill';
import { Notfound } from './modules/notfound';
import { Layout } from './modules/layout';


const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/"   component={() => <Home />} />
          <Route path="/about"    component={() => <About />} />
          <Route path="/contact"  component={() => <Contact />} />
          <Route path="/project/:projectName"  component={() => <ViewProject />} />
          <Route path="/project"  component={() => <Project />} />
          <Route path="/skill"    component={() => <Skill />} />
          <Route path="/*"        component={() => <Notfound />} />
        </Switch>
      </Layout>
    </>
  )
}

export default App;
