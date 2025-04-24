import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


export default function AccordionExpandIcon({faq}) {
    console.log(faq);
    
  return (
    <div>
        {faq.map((item:any,index:number)=>(
            
            <Accordion key={index} sx={{borderRadius: '16px', border: '1px solid #2E2E2E', backgroundColor: '#2E2E2E', padding: "0px 12px 0px 24px",
                justifyContent: "flex-end",
                alignItems: "center",
                margin: "16px",
                alignSelf: "stretch",
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                }}>
            <AccordionSummary
              expandIcon={<AddIcon/>}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography sx={{color:'#E6E6E6', fontFamily: "Abar VF", fontSize: '20px', fontStyle: 'normal', fontWeight: 700, lineHeight: 'normal'}} 
              component="span">{item.Q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{color: '#C9C9C9',fontFamily: "Abar VF", fontSize: '16px', fontStyle: 'normal', fontWeight: 550, lineHeight: 'normal',}}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      

    </div>
  );
}
