import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBellSmRegularIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M6.063 4.188c.018-.274.164-.42.437-.438.273.018.42.164.438.438v.464c1.13.128 2.06.593 2.789 1.395.747.802 1.13 1.786 1.148 2.953v.793a4.563 4.563 0 0 0 1.313 3.2l.082.081c.237.237.355.52.355.848a1.1 1.1 0 0 1-.355.848 1.1 1.1 0 0 1-.848.355H1.578c-.346 0-.629-.118-.848-.355a1.101 1.101 0 0 1-.355-.848c0-.328.118-.62.355-.875l.083-.055a4.563 4.563 0 0 0 1.312-3.199V9c.018-1.167.401-2.151 1.148-2.953.73-.802 1.66-1.267 2.79-1.395v-.465ZM6.5 5.5c-.984.018-1.814.355-2.488 1.012C3.355 7.186 3.018 8.016 3 9v.793c-.018 1.477-.547 2.744-1.586 3.8l-.055.083a.34.34 0 0 0-.109.246c.018.2.128.31.328.328h9.844c.2-.018.31-.128.328-.328a.34.34 0 0 0-.11-.246l-.054-.082c-1.04-1.057-1.568-2.324-1.586-3.801V9c-.018-.984-.365-1.814-1.04-2.488-.655-.657-1.476-.994-2.46-1.012Zm-.82 10.8c.146.365.419.557.82.575.401-.018.674-.21.82-.574.11-.255.301-.347.575-.274.237.11.319.292.246.547a1.826 1.826 0 0 1-.63.848 1.64 1.64 0 0 1-1.011.328c-.383 0-.72-.11-1.012-.328a1.826 1.826 0 0 1-.629-.848c-.073-.255.01-.437.246-.547.274-.073.465.019.575.274Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBellSmRegularIcon);
export default ForwardRef;
