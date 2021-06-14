const Staff = require('../models/staff');

exports.index  = async (req, res, next) => {

    const staff = await Staff.find().sort({_id:-1});

    res.status(200).json({
        data : staff
    });
  }

exports.show  = async (req, res, next) => {

    try{
        const {id} = req.params;
        // const staff = await Staff.findOne({_id:id});
        const staff = await Staff.findById(id);
        if (!staff){
            throw new Error('not found data');
        }
        else{
            
            res.status(200).json({
                data : staff
            });
        }
    }
    catch(error){
        res.status(400).json({
            error:{          
                message :  'eror jaaaaaaa' + error.message
            }
        });
    }
  }

exports.destroy  = async (req, res, next) => {

    try{
        const {id} = req.params;
        // const staff = await Staff.findByIdAndDelete({_id:id});
        const staff = await Staff.deleteOne({_id:id});
        console.log(staff);

        if ( staff.deletedCount === 0){
            throw new Error('ไม่สามารถลบข้อมูลได้');
        }
        else{
            console.log(staff);
            res.status(200).json({
                message : 'delete success'
            });
        }
    }
    catch(error){
        res.status(400).json({
            error:{          
                message :  'eror jaaaaaaa' + error.message
            }
        });
    }
  }

exports.update  = async (req, res, next) => {

    try{
        const {id} = req.params;
        const {name,salary} = req.body;
        // const staff = await Staff.findById(id);
        // staff.name = name;
        // staff.salary = salary;
        // await staff.save();
        // ----------------------------------------------------------------
        // const staff = await Staff.findByIdAndUpdate(id,{
        //     name: name,
        //     salary:salary
        // });
        const staff = await Staff.updateOne({_id:id},{
            name:name,
            salary:salary,
        });
        console.log(staff);

        if ( staff.nModified === 0){
            throw new Error('ไม่สามารถupdateข้อมูลได้');
        }
        else{
            console.log(staff);
            res.status(200).json({
                message : 'update success'
            });
        }
         
       
    }
    catch(error){
        res.status(400).json({
            error:{          
                message :  'eror jaaaaaaa' + error.message
            }
        });
    }
  }



exports.insert  = async (req, res, next) => {

    const {name,salary} = req.body;

    let staff = new Staff({
        name : name,
        salary : salary,
    });
    await staff.save();

    res.status(201).json({
        message : 'insert done'
    });
}