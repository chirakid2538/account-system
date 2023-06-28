import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const IndexPage = () => {
	const { t } = useTranslation(['common']);

	return <div>@chirakid :) {t('common:button-change-locale')}</div>;
};

export const getServerSideProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale, ['common'])),
	},
});

export default IndexPage;
