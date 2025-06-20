import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLinkedinLgIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.5 6.75c.664 0 1.25.586 1.25 1.29V23c0 .703-.586 1.25-1.25 1.25H1.46C.798 24.25.25 23.703.25 23V8.04c0-.704.547-1.29 1.21-1.29zm-10.977 15v-8.32H2.945v8.32zm-1.289-9.492c.82 0 1.485-.664 1.485-1.485 0-.82-.664-1.523-1.485-1.523-.859 0-1.523.703-1.523 1.523s.664 1.485 1.523 1.485M15.25 21.75v-4.57c0-2.227-.508-3.985-3.125-3.985-1.25 0-2.11.703-2.46 1.367h-.04V13.43h-2.46v8.32h2.577v-4.102c0-1.093.195-2.148 1.563-2.148 1.328 0 1.328 1.25 1.328 2.188v4.062z' />
    </g>
    <defs>
      <clipPath id='1ee8e759512047788727caf11cdb1610__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLinkedinLgIcon);
export default ForwardRef;
