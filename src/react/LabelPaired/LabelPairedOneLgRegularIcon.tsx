import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedOneLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={10}
    height={30}
    viewBox='0 0 10 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5.625 7.375V23h3.75q.585.039.625.625-.039.585-.625.625H.625Q.04 24.211 0 23.625.039 23.04.625 23h3.75V8.547l-2.773 1.836q-.508.273-.86-.156-.273-.508.156-.86l3.75-2.5a.67.67 0 0 1 .665-.039q.312.195.312.547' />
    </g>
    <defs>
      <clipPath id='862619e3a3a474898276e87a97c48639__a'>
        <path d='M0 0h10v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedOneLgRegularIcon);
export default ForwardRef;
