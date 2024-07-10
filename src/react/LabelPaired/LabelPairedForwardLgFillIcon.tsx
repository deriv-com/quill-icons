import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.031 22.727c-.351.312-.898.39-1.328.156C.273 22.688 0 22.258 0 21.75V9.25c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l6.719 5.586v3.242zM10 19.25v-10c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l7.5 6.25c.274.235.469.586.469.938 0 .39-.195.742-.469.977l-7.5 6.25c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133z' />
    </g>
    <defs>
      <clipPath id='14dde611a189d08a9303696b330dd39d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardLgFillIcon);
export default ForwardRef;
