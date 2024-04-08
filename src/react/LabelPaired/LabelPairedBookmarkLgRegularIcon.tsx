import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookmarkLgRegularIcon = (
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
      <path d='M0 7.375C0 6.359.82 5.5 1.875 5.5h11.25C14.141 5.5 15 6.36 15 7.375v17.266c0 .507-.39.859-.898.859a1.04 1.04 0 0 1-.47-.117L7.5 21.28l-6.172 4.102a1.04 1.04 0 0 1-.469.117c-.507 0-.859-.352-.859-.86zm1.875-.625a.64.64 0 0 0-.625.625v16.563l5.898-3.946a.67.67 0 0 1 .665 0l5.937 3.945V7.375c0-.312-.312-.625-.625-.625z' />
    </g>
    <defs>
      <clipPath id='7d707f1196055516f525f7318663e50e__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookmarkLgRegularIcon);
export default ForwardRef;
