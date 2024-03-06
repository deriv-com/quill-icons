import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMicrophoneLgRegularIcon = (
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
      <path d='M10 9.25q-.039-1.055-.742-1.758T7.5 6.75q-1.055.039-1.758.742T5 9.25v6.25q.039 1.055.742 1.758T7.5 18q1.055-.039 1.758-.742.703-.704.742-1.758zm-6.25 0q.038-1.602 1.094-2.656Q5.898 5.539 7.5 5.5q1.602.038 2.656 1.094 1.055 1.054 1.094 2.656v6.25q-.039 1.602-1.094 2.656Q9.102 19.211 7.5 19.25q-1.602-.038-2.656-1.094Q3.789 17.102 3.75 15.5zM2.5 13.625V15.5q.04 2.109 1.445 3.555Q5.391 20.46 7.5 20.5q2.109-.04 3.555-1.445Q12.46 17.609 12.5 15.5v-1.875q.039-.585.625-.625.585.039.625.625V15.5q-.04 2.5-1.64 4.219-1.563 1.719-3.985 1.992v2.539h2.5q.585.039.625.625-.039.585-.625.625h-6.25q-.586-.039-.625-.625.039-.585.625-.625h2.5v-2.54q-2.423-.272-3.984-1.991Q1.289 18 1.25 15.5v-1.875q.039-.585.625-.625.586.039.625.625' />
    </g>
    <defs>
      <clipPath id='904e429d021c82cf39b1b2939d83e35a__a'>
        <path d='M0 0h15v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMicrophoneLgRegularIcon);
export default ForwardRef;
