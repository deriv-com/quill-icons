import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXmarkLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={30}
    viewBox='0 0 15 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m13.477 10.852-4.688 4.687 4.649 4.649c.39.351.39.937 0 1.289a.856.856 0 0 1-1.29 0l-4.687-4.649-4.648 4.649a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329L6.172 15.5l-4.649-4.648c-.39-.352-.39-.938 0-1.329.352-.351.938-.351 1.329 0L7.5 14.211l4.648-4.648c.352-.391.938-.391 1.329 0a.92.92 0 0 1 0 1.289' />
    </g>
    <defs>
      <clipPath id='da1a8f8f41c964695e5c063fec765d6f__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXmarkLgBoldIcon);
export default ForwardRef;
