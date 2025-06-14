import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzleLgBoldIcon = (
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
      <path d='M17.5 5.5C18.867 5.5 20 6.633 20 8v5a.64.64 0 0 1-.625.625h-2.031a.475.475 0 0 0-.469.469v.156c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-.156a.504.504 0 0 0-.469-.469H12.5a.617.617 0 0 1-.625-.625v-1.25c0-.312.273-.625.625-.625h.625c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25H12.5A.617.617 0 0 1 11.875 8V6.125c0-.312.273-.625.625-.625zM0 14.875V10.5C0 9.133 1.094 8 2.5 8h5.625c.313 0 .625.313.625.625v2.031c0 .274.195.469.469.469h.156c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.156a.475.475 0 0 0-.469.469v2.031a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625V15.5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v.625a.64.64 0 0 1-.625.625h-1.25v5.938c0 .546.39.937.938.937H8.75v-1.406a.504.504 0 0 0-.469-.469h-.156c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.156a.475.475 0 0 0 .469-.469v-1.406c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625V18c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25v-.625c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625V23c0 1.406-1.133 2.5-2.5 2.5H2.813A2.8 2.8 0 0 1 0 22.688v-7.813' />
    </g>
    <defs>
      <clipPath id='a9fe177de0fc3d370aa268ef24214cdf__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzleLgBoldIcon);
export default ForwardRef;
