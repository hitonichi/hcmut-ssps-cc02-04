//import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider, createTheme } from '@mui/material';
//import { create } from '@mui/material/styles/createTransitions';
//import { styled } from '@mui/system';
//import React from 'react';
import { Button } from '@mui/material';
//import { useState } from "react";

const dateInputRange = Array.from(Array(31), (_,i)=>i+1);
const monthInputRange = Array.from(Array(12), (_,i)=>i+1);
const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (_, index) => start + index * step
    );
const yearInputRange = arrayRange(2023,2030,1).reverse();

const AllocationDateForm = () => {
  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            
          }
        }
      },
      MuiButton: {
        defaultProps:{
          disableElevation:true,
          disableRipple:true,
          
        },
        styleOverrides: {
          root: {
            width: "17%",
            color: 'white',
            backgroundColor:  '#0461a3',
            borderRadius: "30px",
            height: "65%",
            fontWeight: '650',
            fontSize: '11px',
            lineHeight: '18px'
          }
        }
      }
    }
  });
  const date = {
    options: dateInputRange
  }
  const month = {
    options: monthInputRange
  }
  const year = {
    options: yearInputRange
  }
  return (
    <>
      <ThemeProvider theme={theme}>
      <div className = 'h-full w-full flex flex-col'>
        <div className='h-1/2 w-full flex justify-center items-end'>
          
          <Box component="form" className = 'w-2/3 grid grid-cols-3 gap-0'>
            
            <Autocomplete
              {...date}
              renderInput = {(params) =>(
                
                <TextField 
                
                {...params} type="number" label="Ngày" variant = "outlined" 
                />
                
              )}
            />
            <Autocomplete
              {...month}
              
              renderInput = {(params) =>(
                <TextField {...params} type="number" label="Tháng" variant = "outlined"/>
              )}
            />
            <Autocomplete
              {...year}
            
              renderInput = {(params) =>(
                <TextField {...params} type="number" label="Năm" variant = "outlined"/>
              )}
            />
            
          </Box>
          
        </div>
        <div className = "flex items-end justify-center mt-[10px] h-1/5 font-semibold text-[#f09c21] text-[18px]">
            
            Ngày phân bố trước đó: 25/12/2022
            
        </div>
        <div className = "h-[10%] mt-[25px] flex items-top justify-center" >
          <Button variant = "contained">
              Lưu
          </Button>
        </div>
      </div>
      </ThemeProvider>
      
    </>
  );
};

export default AllocationDateForm;
