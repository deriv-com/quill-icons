import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPauseLgRegularIcon = (
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
      <path d='M2.125 9.25q-.585.039-.625.625v11.25q.039.585.625.625H4q.585-.039.625-.625V9.875Q4.586 9.29 4 9.25zM.25 9.875q.039-.781.547-1.328.546-.508 1.328-.547H4q.781.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328Q4.782 22.961 4 23H2.125a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328zM9 9.25q-.585.039-.625.625v11.25q.039.585.625.625h1.875q.585-.039.625-.625V9.875q-.039-.585-.625-.625zm-1.875.625q.039-.781.547-1.328Q8.218 8.039 9 8h1.875q.78.039 1.328.547.508.546.547 1.328v11.25q-.039.78-.547 1.328-.546.508-1.328.547H9a2.04 2.04 0 0 1-1.328-.547 2.04 2.04 0 0 1-.547-1.328z' />
    </g>
    <defs>
      <clipPath id='540233673194a15bb826a2e8038b5aca__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPauseLgRegularIcon);
export default ForwardRef;
