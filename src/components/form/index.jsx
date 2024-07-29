import React, { useRef, useState } from 'react';
import '../form/index.css';

const Form = () => {
    const [user, setUser] = useState('');
    const imgRef = useRef(null);
    const companyRef = useRef(null);
    const emailRef = useRef(null);
    const telefonRef = useRef(null);
    const davlatRef = useRef(null);
    const shaharRef = useRef(null);
    const joyRef = useRef(null);
    const hodimlarRef = useRef(null);
    const comentRef = useRef(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!imgRef.current.value) newErrors.img = 'malumot kiriting';
        if (!companyRef.current.value) newErrors.name = 'malumot kiriting';
        if (!emailRef.current.value || !/\S+@\S+\.\S+/.test(emailRef.current.value)) newErrors.email = 'email kiriting';
        if (!telefonRef.current.value || !/^\+998\d{9}$/.test(telefonRef.current.value)) newErrors.telefon = 'malumot kiriting';
        if (!davlatRef.current.value || davlatRef.current.value === 'Davlat') newErrors.davlat = 'malumot kiriting';
        if (!shaharRef.current.value || shaharRef.current.value === 'shahar') newErrors.shahar = 'malumot kiriting';
        if (!joyRef.current.value) newErrors.joy = 'malumot ';
        if (!hodimlarRef.current.value || hodimlarRef.current.value <= 0) newErrors.hodimlar = 'malumot kiriting';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const users = {
        img: imgRef.current ? imgRef.current.value : '',
        name: companyRef.current ? companyRef.current.value : '',
        email: emailRef.current ? emailRef.current.value : '',
        telefon: telefonRef.current ? telefonRef.current.value : '',
        davlat: davlatRef.current ? davlatRef.current.value : '',
        shahar: shaharRef.current ? shaharRef.current.value : '',
        joy: joyRef.current ? joyRef.current.value : '',
        hodimlar: hodimlarRef.current ? hodimlarRef.current.value : '',
        coment: comentRef.current ? comentRef.current.value : '',
    };
    

    const saveclick = (e) => {
        e.preventDefault()
        if (!validate()) {
            console.log(users);
            
        }
        localStorage.setItem('users', JSON.stringify(users));
         
    };

    const hendlclick = () => {
        let input = document.querySelector('.blowonein');
        let but = document.querySelector('.blowebut');
        input.style.display = 'block';
        but.style.display = 'none';
    };

    return (
        <div>
            <div className="blow">
                <div className="blowone">
                    <img src="https://picsum.photos/200/300" alt="" />
                    <input ref={imgRef} className='blowonein' type="text" placeholder='Img link' />
                    {errors.img && <span className="error">{errors.img}</span>}
                    <button onClick={hendlclick} className='blowebut'>Yuklash</button>
                </div>
                <form className='blowfrom'>
                    <label>Kompaniya nomi<span>*</span></label><br />
                    <input ref={companyRef} type="text" placeholder='Kompaniya nomi' />
                    {errors.name && <span className="error">{errors.name}</span>}
                    <br /><br />
                    <label>Email<span>*</span></label><br />
                    <input ref={emailRef} type="text" placeholder='Email' />
                    {errors.email && <span className="error">{errors.email}</span>}
                    <br /><br />
                    <label>Telefon raqam <span>*</span></label><br />
                    <input ref={telefonRef} type="text" placeholder='+998' />
                    {errors.telefon && <span className="error">{errors.telefon}</span>}
                </form>
                <form className='blowtruedf'>
                    <div className="truedf">
                        <label>Davlat <span>*</span></label><br />
                        <select ref={davlatRef}>
                            <option>Davlat</option>
                            <option>Uzb</option>
                            <option>Rus</option>
                        </select>
                        {errors.davlat && <span className="error">{errors.davlat}</span>}
                        <br />
                    </div>

                    <div className="truedf">
                        <label>Shahar <span>*</span></label><br />
                        <select ref={shaharRef}>
                            <option>shahar</option>
                            <option>Toshkent</option>
                            <option>Moskva</option>
                        </select>
                        {errors.shahar && <span className="error">{errors.shahar}</span>}
                    </div>
                </form>
            </div>

            <div className="maininn">
                <form>
                    <label>Joy <span>*</span></label><br />
                    <input ref={joyRef} type="text" placeholder='Joy' />
                    {errors.joy && <span className="error">{errors.joy}</span>}
                    <br /><br />
                    <label>Hodimlar soni<span>*</span></label><br />
                    <input ref={hodimlarRef} type="number" placeholder='Hodimlar soni' />
                    {errors.hodimlar && <span className="error">{errors.hodimlar}</span>}
                    <br /><br />
                    <textarea ref={comentRef} name="text" cols="30" rows="10">Coment</textarea>
                    <br />
                    <button onClick={saveclick}>Keyingisi</button>
                </form>
            </div>
        </div>
    );
}

export default Form;
