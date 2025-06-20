import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBookCircleQuestionLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M0 8c0-1.367 1.094-2.5 2.5-2.5h13.125c1.016 0 1.875.86 1.875 1.875v5.898c-.469.118-.86.274-1.25.508V7.375c0-.312-.312-.625-.625-.625H5V20.5h7.5c.04.43.117.86.234 1.25H2.5c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25h11.563c.39.508.82.898 1.328 1.25H2.5A2.47 2.47 0 0 1 0 23zm1.25 0v12.852c.352-.196.781-.352 1.25-.352h1.25V6.75H2.5c-.703 0-1.25.586-1.25 1.25m5.625 3.125c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H7.5a.617.617 0 0 1-.625-.625m0 3.75c0-.312.273-.625.625-.625h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H7.5a.617.617 0 0 1-.625-.625m6.875 5c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m1.25 0a4.37 4.37 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m1.875-1.484c0-.899.703-1.641 1.602-1.641h1.601c.977 0 1.797.82 1.797 1.797 0 .664-.39 1.289-.977 1.601l-.937.47a.59.59 0 0 1-.586.507.617.617 0 0 1-.625-.625v-.234c0-.235.117-.47.313-.586l1.25-.625a.61.61 0 0 0 .312-.508c0-.274-.273-.547-.547-.547h-1.601c-.196 0-.352.195-.352.39v.235a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625zm1.875 3.984c0-.312.273-.625.625-.625.313 0 .625.313.625.625a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='7388baf997bac82737ea6e59073f426d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBookCircleQuestionLgRegularIcon);
export default ForwardRef;
