import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={21}
    height={36}
    viewBox='0 0 21 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.297 8.25q-.188 0-.281.188L7.125 9.75h6.797l-.89-1.312q-.142-.188-.329-.188zm8.297 1.5h3.281q1.032.095 1.125 1.125-.093 1.032-1.125 1.125h-.562l-1.125 15.234a2.94 2.94 0 0 1-.938 1.97q-.843.75-2.016.796H5.766q-1.172-.047-2.016-.797a2.94 2.94 0 0 1-.937-1.969L1.687 12h-.562Q.095 11.907 0 10.875q.095-1.03 1.125-1.125h3.281l1.735-2.578Q6.937 6.047 8.297 6h4.406q1.359.047 2.203 1.172zm.468 2.25H3.938l1.079 15.047q.14.656.75.703h9.468q.61-.047.75-.703z' />
    </g>
    <defs>
      <clipPath id='c2dffe16c73f04f4a221a664fc6355db__a'>
        <path d='M0 0h21v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashXlBoldIcon);
export default ForwardRef;
