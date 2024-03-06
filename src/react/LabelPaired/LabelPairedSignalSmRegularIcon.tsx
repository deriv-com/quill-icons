import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSignalSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M16.438 4.188v13.125q-.028.41-.438.437-.41-.027-.437-.437V4.188q.027-.411.437-.438.41.027.438.438M12.5 6.374q.41.027.438.438v10.5q-.028.41-.438.437-.41-.027-.437-.437v-10.5q.027-.411.437-.438M9.438 9.438v7.874q-.028.411-.438.438-.41-.027-.437-.437V9.438Q8.59 9.027 9 9q.41.027.438.438M5.5 11.625q.41.027.438.438v5.25q-.029.41-.438.437-.41-.027-.437-.437v-5.25q.027-.411.437-.438M2 14.25q.41.027.438.438v2.624q-.029.411-.438.438-.41-.027-.437-.437v-2.625q.027-.411.437-.438' />
    </g>
    <defs>
      <clipPath id='e1285570a4359b3b88a607fd807d91bb__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSignalSmRegularIcon);
export default ForwardRef;
