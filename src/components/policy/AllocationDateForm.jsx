//import * as React from 'react';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';
//import { create } from '@mui/material/styles/createTransitions';
//import { styled } from '@mui/system';
//import React from 'react';
import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
//import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
const weekInputRange = Array.from(Array(15), (_,i)=>i+1);
const AllocationDateForm = () => {
  const [week, setWeek] = useState(2);
  const [newWeek, setNewWeek] = useState(week);
  const theme = createTheme({
    components: {
      
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            height: "43px",
            paddingLeft : "10px"
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            width: "70px"
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
            width: "100px",
            color: 'white',
            backgroundColor:  '#0461a3',
            borderRadius: "30px",
            height: "30px",
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '18px'
          }
        }
      }
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    setNewWeek((week));
    //const result = {week}
    //console.log(e.target.value)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
      <div className = 'h-full w-full flex flex-col'>
        <div className='h-full w-full flex justify-center items-center'>
          
          <Box 
            component="form" 
            onSubmit = {handleSubmit}
            
            className = 'w-full flex flex-col h-2/3 gap-0 justify-center'
            noValidate
            autoComplete="off"
            sx = {
              {
                '& .MuiTextField-root': {width: '12ch',textAlign: 'center',fontSize: '14.7px'}
              }
            }
          >
            
            <div className ='w-full h-1/3 flex flex-row gap-[1rem] justify-center items-center mt-[80px]'>
              <div className = 'flex justify-center items-center font-semibold text-[24px] mb-[4px]'>
                Tuần phân bố mới:
              </div>
              <div className = 'flex justify-center items-center'>
                <TextField
                  required
                  select
                  value = {week}
                  InputProps={{
                    startAdornment :(
                      <InputAdornment position="start">
                        <EventRoundedIcon/>
                      </InputAdornment>
                    )
                  }}
                  
                  //onSubmit = {handleSubmit}
                  onChange = {(e) => setWeek(e.target.value)}
                >
                {weekInputRange.map((option) => (
                  <MenuItem key = {option} value = {option}>
                    {option}
                  </MenuItem>
                ))}
            </TextField>
              </div>
            </div>
            <div className = "flex flex-col h-2/3 w-full items-center justify-center mt-[0px]">
              <div className = "h-1/3 w-full flex justify-center items-center font-['Arial'] text-[16px] italic	mb-[0px]">
                Số trang mặc định sẽ được cấp cho tài khoản sinh viên vào tuần được chọn ở hai học kì chính
              </div>
              <div className = "flex h-1/3 w-full items-center justify-center mt-[35px] h-1/5 font-semibold text-[#f09c21] text-[19.5px]">
            
                Tuần phân bố trước đó : {newWeek}
          
              </div>
              <div className = "h-1/3 mt-[15px] flex items-top justify-center" >
                <Button type = "submit"  variant = "contained">
                  Lưu
                </Button>
              </div>
            </div>
          </Box>
          
        </div>
        
      </div>
      </ThemeProvider>
      
    </>
  );
};

export default AllocationDateForm;
