import React, { useEffect, useState } from 'react'
import CreateComponent from './Components/2-what-you-need' // 2
import { FuncComponent } from './Components/3-what-is-a-component' //3
import { ClassComponent } from './Components/3-what-is-a-component' //3
import PassingArguments from './Components/4-properties' //4
import ButtonEvent from './Components/5.A-Events-'
import FuncState from './Components/6-States'
import ParentElement from './Components/7-Sharing-States'
import SendingArray from './Components/8-Iterating-mapping'
import PropsChildren from './Components/9-PropsChildren'
import CounterClass from './Components/10-React-Lifecycle'
import FuncLifeCycle from './Components/11-React-LyfeCycle-Functions'
import Fetches from './Components/13-Fetches'
import { AwaitFetch } from './Components/13-Fetches'
import OnClickComponent from './Components/14-Click-Events'
import ContextMain from './Components/15-A-Context-Master'
import Firestore from './Components/16-FireStore'
import LoginFireBase from './Components/17-FireBase-LoginAuth'
import { auth } from './FireBase/3-FireStore-Setup-Fetching'
import LogginStatus from './Components/18-LogginStatus'
import Queries from './Components/19-Querys'
import InfiniteScrolling from './Components/20-infinite-Scrolling'
import UseCustomeHook from './Components/21.B-CustomeHook'
import CustomeHook2 from './Components/21.C-CustomeHook2'
import { NameContext } from './z-15-Example-Component/NameContext'
const App = () => {
	return (
		<div>
			<div>
				<h1>Header</h1>
				<h3>Home</h3>
				<h3>About</h3>
				<h3>Settings</h3>
			</div>
			<div>
				<NameContext.Provider value={'John'}>
					<CreateComponent />
					<FuncComponent />
					<ClassComponent />
					<PassingArguments name="mosh" />
					<ButtonEvent />
					<FuncState />
					<ParentElement />
					<SendingArray />
					<PropsChildren>
						<p>Send this message to PropsChildren</p>
					</PropsChildren>
					<CounterClass />
					<FuncLifeCycle />
					<Fetches />
					<AwaitFetch />
					<OnClickComponent />
					<ContextMain />
					<Firestore />
					<LoginFireBase />
					<LogginStatus />
					<Queries />
					<InfiniteScrolling />
					<UseCustomeHook />
					<CustomeHook2 />
				</NameContext.Provider>
			</div>
		</div>
	)
}

export default App
