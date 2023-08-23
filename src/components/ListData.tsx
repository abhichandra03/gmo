import { Box, ListItem } from '@mui/material'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import {AiFillPlusCircle, AiFillMinusCircle} from "react-icons/ai"
import React, {useState } from 'react'

interface ListProps {
    department:string,
    sub_departments: string[],
}


const Items : ListProps[] = [
	{
  	department: "customer_service",
  	sub_departments: [
    	"support",
    	"customer_success"
  	]
	},
	{
  	department: "design",
  	sub_departments: [
    	"graphic_design",
    	"product_design",
    	"web_design"
  	]
	}
  ]

  interface TickedItems {
	id:number,
	name:string,
  }


const ListData = () => {
	const [isChecked, setIsChecked] = useState<String[]>([""])
	const [open, setOpen] = useState<Number[]>([])
	
	const handleClickRow= (clickIndex:Number) =>{
		if(open.includes(clickIndex)){
			const openCopy = open.filter((element)=>{ return element!=clickIndex})
			setOpen(openCopy)
		}else{
			const openCopy = [...open]
			openCopy.push(clickIndex)
			setOpen(openCopy)
		}
	}
	
	const handleClickCheck= (subdep:String) =>{

		if(isChecked.includes(subdep)){
			const isCheckedCopy = isChecked.filter((element)=>{ return element!=subdep})
			setIsChecked(isCheckedCopy)
		}else{
			const isCheckedCopy = [...isChecked]
			isCheckedCopy.push(subdep)
			setIsChecked(isCheckedCopy)
		}
	}
	
	const addAll = (subDepartments:String[]) =>{
		if(subDepartments.every(element => isChecked.includes(element))){
			const isCheckedCopy = isChecked.filter((e) => subDepartments.every((subdepart) => {return e!=subdepart}))
			setIsChecked(isCheckedCopy)
		}else{
			const isCheckedCopy = [...isChecked]
			const newDepartment = subDepartments.filter((e) => isChecked.every((subdepart) => {return e!=subdepart}))
			isCheckedCopy.push(...newDepartment)
			setIsChecked(isCheckedCopy)
		}
	}

	
  return (
    <Box sx={{
		minHeight:"200px",
		borderRadius: 2,
		m: 6,
		minWidth: 300,
		display:"flex",
		justifyContent:"center"
	  }}>
        <List sx={{minWidth:500,minHeight:"200px", borderRadius:4, p:4, boxShadow:20, color:"#ac3b61"}}>
			{Items.map((item, index)=>(
			<ListItem divider key={index} className='flex flex-col' alignItems="flex-start">
				<ListItemButton sx={{width:"100%"}}>
					<ListItemIcon onClick={()=>handleClickRow(index)}>{
						open.includes(index)?(<AiFillMinusCircle size={20}/>):(<AiFillPlusCircle size={20}/>)
						}
					</ListItemIcon>
					<ListItemIcon>
						<Checkbox
                  			edge="start"
							checked={item.sub_departments.every(element => isChecked.includes(element))}
                  			tabIndex={-1}
                  			disableRipple
							  onClick={()=>addAll(item.sub_departments)}
							  />
							  
					</ListItemIcon>	
					<ListItemText primary={item.department}/>
				</ListItemButton>



				<Collapse in={open.includes(index)?true:false}>
					<List >
					{item.sub_departments.map((subdep, id)=>(
						<ListItem key={id} className='mx-16'>
						<ListItemButton>
							<ListItemIcon onClick={() => handleClickCheck(subdep)}>
							<Checkbox
                  			edge="start"
                 			checked={isChecked.includes(subdep)}
                  			tabIndex={-1}
                  			disableRipple
                />
							</ListItemIcon>
							<ListItemText primary={subdep}/>
						</ListItemButton>
						</ListItem>
					))}
					</List>
				</Collapse> 
				</ListItem>
				
				))}
				

        </List>
    </Box>
  )
}

export default ListData