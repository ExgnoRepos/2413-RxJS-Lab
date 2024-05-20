# RxJS Labs

This is the node project to run your course labs and other code in

If you are using the provided VMs, then this is aready installed.

If you want to install this on your local machine, the following needs to be done.

### Installing the programs

This was built and tested with the LTS version of node v20.12
Typescript, the TS compiler and ts-node were installed globally but you can add install those locally in your project as well.

```console
npm install -g typescript
npm install -g tsc
npm install -g ts-node
```

### Installing the labs

Clone the repository, then locate to the repo and install the npm dependencies

```console
git clone https://github.com/ExgnoRepos/2413-RxJS-Lab.git
cd 2413-RxJS-Lab
npm install
```
To ensure that everything is installed correctly, run the `test.ts` file like this, whichs should produce the output 20 30 40

```console
tsc test.ts
node test.js
20
30
40
```
Finally, open the `test.html` file and press the "Go Live" label in the lower right hand corner of VSCode to ensure that you can render the page.

