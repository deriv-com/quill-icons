import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedForwardStepLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.625 8.938q.078-.86.938-.938.858.078.937.938v13.125q-.079.858-.937.937-.86-.079-.938-.937V17.96l-6.914 4.844Q2.399 23 2.047 23q-.508 0-.82-.352-.352-.312-.352-.82V9.172q0-.508.352-.82Q1.539 8 2.047 8q.39 0 .664.195l6.914 4.844zm0 6.718v-.312L2.75 10.539V20.5z' />
    </g>
    <defs>
      <clipPath id='4588cc466ab6ea95ce8d44a9649c60a9__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedForwardStepLgBoldIcon);
export default ForwardRef;
