const Empleado = require('../models/Empleado');

const empleadoCtrl={};
empleadoCtrl.getEmpleados= async (req,res)=>{
    const empleados= await Empleado.find();
    res.json(empleados);
    res.send('get empleados')
}
empleadoCtrl.createEmpleado=async(req,res)=>{
    console.log('Tipo de Empleado:', typeof Empleado); // Debe imprimir: function

    const empleado=new Empleado({
        nombre: req.body.nombre,
        cargo: req.body.cargo,
        departamento:req.body.departamento,
        sueldo:req.body.sueldo
    });
    console.log(empleado);
    await empleado.save();
    res.json('status: Datos guardados con exito');
}

empleadoCtrl.getEmpleado=(req,res)=>{
    res.send('get empleado');
}

empleadoCtrl.editEmpleado=async(req,res)=>{
    const {id}=req.params;
    const empleado={
        nombre       : req.body.nombre,
        cargo        : req.body.cargo,
        departamento : req.body.departamento,
        sueldo       : req.body.sueldo
    };
    await Empleado.findByIdAndUpdate(id, {$set:empleado},{new: true});
    res.json('status: Datos actualizados')
}

empleadoCtrl.deleteEmpleado=async(req,res)=>{
    await Empleado.findByIdAndDelete(req.params.id);
    res.json('status: Empleado ha sido removido');
}

module.exports=empleadoCtrl;