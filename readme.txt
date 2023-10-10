ONCE FINNISH THIS LETS LEARN ELECTRON AND TOWRIE 


1) created folder in desktop mern-estate dragged the folder inside vs code 
2) opned terminal inside the folder 
3) creating client side - create react js using vite
	> npm create vite@latest client
	√ Select a framework: » React
	√ Select a variant: » JavaScript + SWC
	ALERTNATIVE WAY SUGGESTED BY VITE:
	> npm create vite@latest my-project -- --template react
	> cd my-project
	
	(https://tailwindcss.com/docs/guides/vite)
	
4) cd client > npm i (install)
5) Install Tailwind CSS
	Install tailwindcss and its peer dependencies, 
	then generate your tailwind.config.js and postcss.config.js files.
	> npm install -D tailwindcss postcss autoprefixer
	> npx tailwindcss init -p

6) Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
	step3 inside : 	(https://tailwindcss.com/docs/guides/vite)
	Check indec.html file
	any tailwind css class if we add an css equivilant of it will be generated.

7) Replace index.css content with 
@tailwind base;
@tailwind components;
@tailwind utilities;

8) CLEANUP
App.css deleted as we used tailwind
Public folder vite.svc
Assets react.svg


9) delete code inside App.jsx and type rfc to get suggetion install the package 
ES7+ React/Redux/React-Native snippets --- snippets for react 
Console Ninja --- get in code console log instead of checking in the browser 
Auto Rename Tag --- renames the closing tag automatically 
Prettier - Code formatter 
Tailwind CSS IntelliSense --- ctrl + space 


________________________________STEP AND OTHER PACKAGED____________________________________



1) rfc auto generates a template code for react 
> npm run dev

2> add the app to a github repo so that it will help us in deploying later 
> git init
> git add . (inside the client folder)
> git commit -m

git config --global user.email "aadithrajkv6363@gmail.com"              
git config --global user.name "gitFLASHa"	

git remote add origin https://github.com/gitFLASHa/mern-estate.git
git branch -M main
git push -u origin main


___________________________________Git Hub Rep Completed___________________________________


Pages and Routing - To create multiple pages 

1) Under SRC folder we need to create a pages folder then create jsx files 
of the pages as per requirement 

2) once created the page we need to add them inside the app.jsx but 
before that we need to install the react router dom
	> cd client
	> npm i react-router-dom
	
3) Then we have to import inside the app.jsx
import Home from './pages/Home'  < import the file then follow the code, then the url should work 
export default function App() { 
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
	
________________________________MULTIPLE PAGES AND ROUTES__________________________________

1) insdie the SRC folder we created another folder called (componenets)

2) created Headers.jsx inside componenets
 
3) Import this insdie the app.jsx <BrowserRouter> (Entire application should be
wrapped inside <BrowserRouter>)

Router, Route (all the route are wrapped by a single Routes)
compoenent should be imported from the location
Each route should have an path url and the componenet (we can give any jsx)

react-router-dom is react-router-native in react native.


To use all thes eroutes inside the ui with the 

react-router-dom : helps in routing but is like a single element above the <routes>
instead of fetching navbar, without the whole page being loaded. React router dom 
helps to move through the pages without reloading the pages.

App componenet

instead of <a href='/path'> we use <Link to='/path'> which will route in faster.

having header tag as header will help in seo purposes 

Everything about React Router : https://www.youtube.com/watch?v=Ul3y1LXxzdU

__________________________Deahher with routing done_________________________________

package.json in the root needs to be created. becuse when we deply 
backend will be conciderd in the root 

> PS C:\Users\aadith\Desktop\mern-estate> npm init -y 
this should be ran in the root 