import React from 'react'
import { NavLink } from '@mantine/core';
import {
    IconGauge,
} from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Navbar() {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation();

    return (
        <>
            <NavLink
                href="#required-for-focus"
                label={t('Core')}
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink
                    href="customer"
                    label={t('Customer')}
                    component="button"
                    onClick={(e) => { navigate('core/customer') }}
                />
                <NavLink
                    href="damage"
                    label={t('Damage')}
                    component="button"
                    onClick={(e) => { navigate('core/damage') }}
                />
                <NavLink
                    href="bankAccount"
                    label={t('BankAccount')}
                    component="button"
                    onClick={(e) => { navigate('core/bankAccount') }}
                />
                <NavLink
                    href="mobilebankAccount"
                    label={t('MobileBankAccount')}
                    component="button"
                    onClick={(e) => { navigate('core/mobilebankAccount') }}
                />
                <NavLink
                    href="newClient"
                    label={t('NewClient')}
                    component="button"
                    onClick={(e) => { navigate('core/newClient') }}
                />
                <NavLink
                    href="landing"
                    label={t('landing')}
                    component="button"
                    onClick={(e) => { navigate('core/modalWithThreeGrid') }}
                />

            </NavLink>

            <NavLink
                href="#required-for-focus"
                label="Sample"
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink href="sample" label="sample" component="button" onClick={(e) => { navigate('sample') }} />
            </NavLink>

            <NavLink
                href="#required-for-focus"
                label="Inventory"
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink href="inventory/sales" label={t('Sales')} component="button" onClick={(e)=>{navigate('inventory/sales')}}  />
            </NavLink>
        </>
    )
}

export default Navbar