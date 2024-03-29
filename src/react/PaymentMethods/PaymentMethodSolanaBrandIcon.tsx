import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodSolanaBrandIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 80'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='url(#bbfe5b7fe255a183456aecf326bceb3d__a)'
      d='m23.897 45.16-3.302 3.54a.76.76 0 0 1-.56.244H4.385a.384.384 0 0 1-.282-.645L7.4 44.76a.76.76 0 0 1 .56-.244h15.652a.381.381 0 0 1 .285.645m-3.302-7.131a.77.77 0 0 0-.56-.244H4.385a.384.384 0 0 0-.282.644L7.4 41.971a.77.77 0 0 0 .56.245h15.652a.384.384 0 0 0 .28-.645zM4.384 35.485h15.652a.76.76 0 0 0 .559-.244l3.302-3.54a.382.382 0 0 0-.285-.645H7.959a.76.76 0 0 0-.559.244l-3.298 3.54a.383.383 0 0 0 .282.645'
    />
    <path
      fill='#000'
      d='M42.933 38.621h-8.374v-2.758h10.55v-2.757H34.531a2.753 2.753 0 0 0-2.767 2.737v2.795a2.75 2.75 0 0 0 2.767 2.74h8.385v2.759H31.963v2.758h10.97a2.753 2.753 0 0 0 2.767-2.738v-2.795a2.75 2.75 0 0 0-2.767-2.74M59.155 33.106H50.75a2.755 2.755 0 0 0-2.775 2.737v8.314a2.75 2.75 0 0 0 1.718 2.536c.336.136.695.204 1.057.201h8.405a2.75 2.75 0 0 0 2.767-2.737v-8.314a2.75 2.75 0 0 0-2.767-2.737m-.02 11.03H50.77v-8.273h8.361zM88.596 33.106h-8.199a2.753 2.753 0 0 0-2.767 2.737v11.051h2.796v-4.53h8.161v4.53h2.795V35.843a2.753 2.753 0 0 0-2.786-2.737m-.02 6.5h-8.162v-3.743h8.162zM121.233 33.106h-8.199a2.754 2.754 0 0 0-2.767 2.737v11.051h2.795v-4.53h8.143v4.53H124V35.844a2.755 2.755 0 0 0-1.713-2.534 2.8 2.8 0 0 0-1.054-.203m-.028 6.5h-8.162v-3.743h8.162zM104.994 44.137h-1.118l-3.997-9.876a1.84 1.84 0 0 0-1.707-1.155h-2.48a1.836 1.836 0 0 0-1.845 1.826v11.962h2.795v-11.03h1.118l3.995 9.875a1.85 1.85 0 0 0 1.715 1.148h2.48a1.835 1.835 0 0 0 1.844-1.826V33.106h-2.8zM67.186 33.106h-2.795v11.051a2.75 2.75 0 0 0 2.777 2.737h8.385v-2.757h-8.367z'
    />
    <path
      fill='url(#bbfe5b7fe255a183456aecf326bceb3d__b)'
      d='m23.897 45.16-3.302 3.54a.76.76 0 0 1-.56.244H4.385a.384.384 0 0 1-.282-.645L7.4 44.76a.76.76 0 0 1 .56-.244h15.652a.381.381 0 0 1 .285.645m-3.302-7.131a.77.77 0 0 0-.56-.244H4.385a.384.384 0 0 0-.282.644L7.4 41.971a.77.77 0 0 0 .56.245h15.652a.384.384 0 0 0 .28-.645zM4.384 35.485h15.652a.76.76 0 0 0 .559-.244l3.302-3.54a.382.382 0 0 0-.285-.645H7.959a.76.76 0 0 0-.559.244l-3.298 3.54a.383.383 0 0 0 .282.645'
    />
    <defs>
      <linearGradient
        id='bbfe5b7fe255a183456aecf326bceb3d__a'
        x1={5.688}
        x2={22.1}
        y1={49.371}
        y2={30.868}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.08} stopColor='#9945FF' />
        <stop offset={0.3} stopColor='#8752F3' />
        <stop offset={0.5} stopColor='#5497D5' />
        <stop offset={0.6} stopColor='#43B4CA' />
        <stop offset={0.72} stopColor='#28E0B9' />
        <stop offset={0.97} stopColor='#19FB9B' />
      </linearGradient>
      <linearGradient
        id='bbfe5b7fe255a183456aecf326bceb3d__b'
        x1={5.688}
        x2={22.1}
        y1={49.371}
        y2={30.868}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.08} stopColor='#9945FF' />
        <stop offset={0.3} stopColor='#8752F3' />
        <stop offset={0.5} stopColor='#5497D5' />
        <stop offset={0.6} stopColor='#43B4CA' />
        <stop offset={0.72} stopColor='#28E0B9' />
        <stop offset={0.97} stopColor='#19FB9B' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodSolanaBrandIcon);
export default ForwardRef;
