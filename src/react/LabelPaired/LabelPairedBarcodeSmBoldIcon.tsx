import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBarcodeSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.656 4.625q.602.054.657.656V16.22q-.055.601-.657.656-.601-.055-.656-.656V5.28q.054-.601.656-.656m2.407 0q.41.027.437.438v11.375q-.027.41-.437.437-.411-.027-.438-.437V5.063q.027-.411.438-.438m1.968 0q.601.054.657.656V16.22q-.056.601-.657.656-.601-.055-.656-.656V5.28q.054-.601.656-.656m3.063 0q.601.054.656.656V16.22q-.054.601-.656.656-.602-.055-.656-.656V5.28q.054-.601.656-.656m4.594.656q.054-.601.656-.656.601.054.656.656V16.22q-.055.601-.656.656-.602-.055-.656-.656zm-1.75-.218q.027-.411.437-.438.41.027.438.438v11.375q-.028.41-.438.437-.41-.027-.437-.437z' />
    </g>
    <defs>
      <clipPath id='8f60f7c41edb33ca52522c4b32dc40a5__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBarcodeSmBoldIcon);
export default ForwardRef;
