import React from 'react';
import ReactDOM from 'react-dom';

import {
    FlexBox,
    Heading,
    FullScreen,
    Progress,
    Slide,
    Deck,
    Box
} from 'spectacle';

import OS from './images/OS.png';
import VM from './images/VM.png';
import VMDOS from './images/VMDOS.png';
import VMAPP from './images/VMAPP.png';
import CVP from './images/CVP.png';
import INSTANCES from './images/INSTANCE.png';
import EBS from './images/EBS.png';
import EBSEFS from './images/EBSEFS.png';
import CONTAINER from './images/CONTAINER.png';
import CONTAINERVSVM from './images/CONTAINERVSVM.png';


const theme = {
    fonts: {
        header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
        text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
    },
    colors: {
        backgroundColor: 'red'
    }
};


const template = () => (
    <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
        backgroundColor="tertiary"
    >
        <Box padding="0 1em">
            <FullScreen />
        </Box>
        <Box padding="1em">
            <Progress />
        </Box>
    </FlexBox>
);


const Presentation = () => (
    <Deck theme={theme} template={template} backgroundColor="primary">
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="52px">
                    🌩{" "}<i>From the kernel to the cloud in ~26 minutes</i>{" "}🌩
                </Heading>
                <Heading color="#2b2b2b" margin="0px" fontSize="small">
                    *This ReactJS Presentation App is running inside a Docker container hosted on AWS Elastic Beanstalk
                    *CI/CD is handled by Github Actions
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="row" backgroundColor="primary" alignItems="left">
            <Heading color="secondary">Topics</Heading>
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    🔵{" "}What is an operating system?
                </Heading>
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    🔵{" "}What is a VM? With examples.
                </Heading>
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    🔵{" "}Cloud and AWS, Instances.
                </Heading>
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    🔵{" "}Elastic Beanstalk.
                </Heading>
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    🔵{" "}Docker, Containers and Kubernetes.
                </Heading>
            </FlexBox>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary" alignItems="left">
                <Heading color="tertiary" margin="0px" fontSize="18px">
                    “If you adopt only one agile practice, let it be retrospectives. Everything else will follow.”
                    —Woody Zuill
                </Heading>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="42px">
                    What is an OS?
                </Heading>
                <img src={OS} alt="what is an os" height="500px" style={{marginLeft:"135px "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="42px">
                    What is a VM?
                </Heading>
                <img src={VM} alt="what is a vm" height="500px" style={{paddingLeft: "20px", marginLeft:"155px "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    VM: How would you play a game from the late 1970’s today in 2021?
                </Heading>
                <img src={VMDOS} alt="vm dos example" height="500px" style={{marginLeft:"135px "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    VM: How would a developer test a cross platform app?
                </Heading>
                <img src={VMAPP} alt="vm app testing example" height="500px" style={{marginLeft:"145px "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="42px">
                    Cloud vs. On-prem
                </Heading>
                <img src={CVP} alt="cloud vs on prem" height="500px" style={{marginLeft:"10px"}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    Instance Types, Differences and Commitments
                </Heading>
                <img src={INSTANCES} alt="cloud vs on prem" height="600px" style={{marginLeft:"10 "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    What is EBS?
                </Heading>
                <img src={EBS} alt="what is ebs" height="500px" style={{marginLeft:""}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    EBS vs. EFS
                </Heading>
                <img src={EBSEFS} alt="EBS vs. EFS" height="500px" style={{marginLeft:"10 "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    What is a Container?
                </Heading>
                <img src={CONTAINER} alt="What is a Container?" height="500px" style={{marginLeft:"10 "}}/>
            </FlexBox>
        </Slide>
        <Slide>
            <FlexBox height="100%" flexDirection="column" backgroundColor="primary">
                <Heading color="tertiary" margin="0px" fontSize="22px">
                    VM vs. Container
                </Heading>
                <img src={CONTAINERVSVM} alt="   VM vs. Container" height="400px" style={{paddingLeft: "100px", marginLeft:"50px", marginTop: "50px"}}/>
            </FlexBox>
        </Slide>
    </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));