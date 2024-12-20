import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const StandaloneVolumeHighRegularIcon = (
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
    <path d='M9.398 13.844a.56.56 0 0 1-.39.156h-3.32a.925.925 0 0 0-.938.938v3.124c0 .547.39.938.938.938h3.32c.117 0 .273.078.39.156l5.352 4.766V9.117zm5.43-6.094c.625 0 1.172.547 1.172 1.172v15.195c0 .625-.547 1.133-1.172 1.133-.312 0-.586-.078-.781-.273l.43-.47-.43.47-5.313-4.727H5.688A2.184 2.184 0 0 1 3.5 18.063v-3.125c0-1.172.977-2.188 2.188-2.188h3.046l5.313-4.687a1.1 1.1 0 0 1 .781-.313m4.649 5.781C20.375 14.195 21 15.29 21 16.5c0 1.25-.625 2.344-1.523 3.008a.584.584 0 0 1-.86-.117.584.584 0 0 1 .117-.86A2.53 2.53 0 0 0 19.75 16.5c0-.781-.39-1.523-1.016-1.992a.584.584 0 0 1-.117-.86.585.585 0 0 1 .86-.117m1.64-2.734a.71.71 0 0 1 .899-.078c1.64 1.406 2.734 3.476 2.734 5.781 0 2.344-1.094 4.414-2.734 5.781a.63.63 0 0 1-.899-.078c-.195-.234-.156-.664.078-.86A6.21 6.21 0 0 0 23.5 16.5a6.2 6.2 0 0 0-2.305-4.805c-.273-.234-.273-.625-.078-.898m3.399-2.852c2.422 2.07 3.984 5.118 3.984 8.555 0 3.438-1.562 6.523-3.984 8.594a.63.63 0 0 1-.899-.078c-.234-.274-.195-.664.078-.86a10.02 10.02 0 0 0 3.516-7.656c0-3.047-1.367-5.781-3.516-7.617-.273-.235-.312-.625-.078-.86a.63.63 0 0 1 .899-.078' />
  </svg>
);
const ForwardRef = forwardRef(StandaloneVolumeHighRegularIcon);
export default ForwardRef;
