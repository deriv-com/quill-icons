import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedExclamationLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={3}
    height={30}
    viewBox='0 0 3 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.438 7.688v11.25q-.079.858-.938.937-.86-.078-.937-.937V7.688q.078-.86.937-.938.859.078.938.938M1.5 24.25q-.547 0-.898-.352Q.25 23.548.25 23q0-.547.352-.898.35-.352.898-.352.547 0 .898.352.352.35.352.898 0 .547-.352.898-.35.352-.898.352' />
    </g>
    <defs>
      <clipPath id='70e9c939b6c5c7b351bacf65c2f07e0d__a'>
        <path d='M0 0h3v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedExclamationLgBoldIcon);
export default ForwardRef;
