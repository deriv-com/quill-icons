import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneCircleThreeRegularIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M16 7.75q-2.383.04-4.375 1.172a9 9 0 0 0-3.203 3.203Q7.25 14.195 7.25 16.5t1.172 4.375a9 9 0 0 0 3.203 3.203Q13.617 25.211 16 25.25q2.383-.04 4.375-1.172a9 9 0 0 0 3.203-3.203q1.172-2.07 1.172-4.375t-1.172-4.375a9 9 0 0 0-3.203-3.203Q18.383 7.789 16 7.75m0 18.75q-2.735-.04-5-1.328-2.265-1.329-3.672-3.672Q6 19.118 6 16.5t1.328-5Q8.735 9.157 11 7.828q2.265-1.29 5-1.328 2.735.04 5 1.328 2.265 1.329 3.672 3.672Q26 13.882 26 16.5t-1.328 5Q23.265 23.844 21 25.172q-2.265 1.29-5 1.328m-3.125-15H18.5q.43.039.586.39.117.43-.195.704l-3.086 2.656h.78q1.369 0 2.227.898.9.9.938 2.227-.039 1.328-.937 2.227-.86.858-2.188.898h-1.406q-1.719-.04-2.735-1.367l-.117-.117q-.313-.508.117-.899.508-.273.899.156l.078.118q.664.86 1.758.859h1.406q.78 0 1.328-.547.508-.546.547-1.328-.039-.82-.547-1.328a1.8 1.8 0 0 0-1.328-.547h-2.5q-.43-.039-.586-.39-.117-.43.195-.704l3.086-2.656h-3.945q-.585-.039-.625-.625.039-.585.625-.625' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneCircleThreeRegularIcon);
export default ForwardRef;
