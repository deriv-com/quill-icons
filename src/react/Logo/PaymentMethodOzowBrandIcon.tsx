import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const PaymentMethodOzowBrandIcon = (
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
      fill='#1E2330'
      d='M88.214 30.964a9.035 9.035 0 1 0 0 18.07 9.035 9.035 0 0 0 0-18.07m0 14.17a5.126 5.126 0 1 1 .03-10.251 5.126 5.126 0 0 1-.03 10.25M52.477 30.964a9.036 9.036 0 1 0-.004 18.072 9.036 9.036 0 0 0 .004-18.072m0 14.17a5.125 5.125 0 1 1 .025-10.251 5.125 5.125 0 0 1-.025 10.25M78.19 48.584H62.914v-2.966l9.228-10.51h-7.457a1.77 1.77 0 0 1-1.771-1.77v-1.964h15.274v3.038l-9.653 10.447h7.885a1.77 1.77 0 0 1 1.768 1.772zM118.276 48.617h-4.101l-3.381-10.137-3.414 10.137h-4.101l-5.722-17.243h2.771a2.4 2.4 0 0 1 2.282 1.661l2.878 8.925L109 31.374h3.552l3.517 10.62 2.879-8.954a2.4 2.4 0 0 1 2.281-1.663H124z'
    />
    <path
      fill='url(#d05efe242efe8cc39b6edc96ce106f8c__a)'
      d='M35.937 39.513a1.425 1.425 0 0 1-1.592-1.236 13.71 13.71 0 0 0-23.351-7.928 1.425 1.425 0 0 1-2.015-2.015 16.564 16.564 0 0 1 28.196 9.579 1.426 1.426 0 0 1-1.236 1.592z'
    />
    <path
      fill='url(#d05efe242efe8cc39b6edc96ce106f8c__b)'
      d='M20.734 45.262a5.263 5.263 0 1 1-.005-10.525 5.263 5.263 0 0 1 .005 10.525m0-7.675a2.412 2.412 0 1 0 0 4.825 2.412 2.412 0 0 0 0-4.824'
    />
    <path
      fill='url(#d05efe242efe8cc39b6edc96ce106f8c__c)'
      d='M24.14 30.715q.002.155-.033.305a1.42 1.42 0 0 1-1.7 1.09 8 8 0 0 0-1.663-.177 8.5 8.5 0 0 0-5.467 2.033c-.703.612-1.392 1.327-2.05 2.022q-.521.543-1.026 1.064l-5.034 5.024-1.761 1.76a.722.722 0 0 1-1.223-.36q-.097-.5-.164-1.01a2.3 2.3 0 0 1 .664-1.933l5.49-5.496q.5-.497.99-1.025c.712-.746 1.443-1.51 2.245-2.21a11.2 11.2 0 0 1 3.92-2.173 11.04 11.04 0 0 1 5.687-.305 1.42 1.42 0 0 1 1.125 1.391'
    />
    <path
      fill='url(#d05efe242efe8cc39b6edc96ce106f8c__d)'
      d='M20.734 56.569a16.66 16.66 0 0 1-14.25-8.121 1.42 1.42 0 0 1 .224-1.725l4.211-4.209a1.424 1.424 0 0 1 2.33.477 8.064 8.064 0 0 0 15.485-3.996 8.06 8.06 0 0 0-2.415-4.801 1.425 1.425 0 0 1 .413-2.333 1.42 1.42 0 0 1 1.558.282A10.91 10.91 0 0 1 31.646 40a10.912 10.912 0 0 1-20.091 5.896l-2.017 2.017a13.705 13.705 0 0 0 21.887.67 1.425 1.425 0 0 1 2.22 1.786 16.51 16.51 0 0 1-12.911 6.2'
    />
    <defs>
      <linearGradient
        id='d05efe242efe8cc39b6edc96ce106f8c__a'
        x1={14.248}
        x2={55.5}
        y1={12.879}
        y2={108.002}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00E587' />
        <stop offset={1} stopColor='#00B8AD' />
      </linearGradient>
      <linearGradient
        id='d05efe242efe8cc39b6edc96ce106f8c__b'
        x1={-107.291}
        x2={-67.519}
        y1={-13.571}
        y2={149.541}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00E587' />
        <stop offset={1} stopColor='#00B8AD' />
      </linearGradient>
      <linearGradient
        id='d05efe242efe8cc39b6edc96ce106f8c__c'
        x1={1.348}
        x2={37.354}
        y1={14.13}
        y2={123.85}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00E587' />
        <stop offset={1} stopColor='#00B8AD' />
      </linearGradient>
      <linearGradient
        id='d05efe242efe8cc39b6edc96ce106f8c__d'
        x1={3.591}
        x2={30.823}
        y1={24.853}
        y2={55.694}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00E587' />
        <stop offset={1} stopColor='#00B8AD' />
      </linearGradient>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(PaymentMethodOzowBrandIcon);
export default ForwardRef;
