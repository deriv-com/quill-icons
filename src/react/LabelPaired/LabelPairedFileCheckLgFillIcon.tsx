import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCheckLgFillIcon = (
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
      <path d='M2.5 5.5h6.25v5c0 .703.547 1.25 1.25 1.25h5V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m7.5 0 5 5h-5zm1.914 10.977h-.039c.39-.352.39-.938 0-1.329a.92.92 0 0 0-1.29 0l-4.374 4.375-1.836-1.835a.856.856 0 0 0-1.29 0 .856.856 0 0 0 0 1.289l2.5 2.5c.353.39.938.39 1.33 0z' />
    </g>
    <defs>
      <clipPath id='d79470809b03f1c6b13124478834526c__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCheckLgFillIcon);
export default ForwardRef;
