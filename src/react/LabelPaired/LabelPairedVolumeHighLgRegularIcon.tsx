import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighLgRegularIcon = (
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
      <path d='M5.898 12.844a.56.56 0 0 1-.39.156h-3.32a.925.925 0 0 0-.938.938v3.124c0 .547.39.938.938.938h3.32c.117 0 .273.078.39.156l5.352 4.766V8.117zm5.43-6.094c.625 0 1.172.547 1.172 1.172v15.195c0 .625-.547 1.133-1.172 1.133-.312 0-.586-.078-.781-.273l.43-.47-.43.47-5.313-4.727H2.188A2.184 2.184 0 0 1 0 17.063v-3.125c0-1.172.977-2.188 2.188-2.188h3.046l5.313-4.687a1.1 1.1 0 0 1 .781-.313m4.649 5.781c.898.664 1.523 1.758 1.523 2.969 0 1.25-.625 2.344-1.523 3.008a.584.584 0 0 1-.86-.117.584.584 0 0 1 .117-.86A2.53 2.53 0 0 0 16.25 15.5c0-.781-.39-1.523-1.016-1.992a.584.584 0 0 1-.117-.86.585.585 0 0 1 .86-.117m1.64-2.734a.71.71 0 0 1 .899-.078c1.64 1.406 2.734 3.476 2.734 5.781 0 2.344-1.094 4.414-2.734 5.781a.63.63 0 0 1-.899-.078c-.195-.234-.156-.664.078-.86A6.21 6.21 0 0 0 20 15.5a6.2 6.2 0 0 0-2.305-4.805c-.273-.234-.273-.625-.078-.898m3.399-2.852C23.438 9.015 25 12.063 25 15.5c0 3.438-1.562 6.523-3.984 8.594a.63.63 0 0 1-.899-.078c-.234-.274-.195-.664.078-.86a10.02 10.02 0 0 0 3.516-7.656c0-3.047-1.367-5.781-3.516-7.617-.273-.235-.312-.625-.078-.86a.63.63 0 0 1 .899-.078' />
    </g>
    <defs>
      <clipPath id='94e5e65d4cd5059f2cd0c5f74eb340bb__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighLgRegularIcon);
export default ForwardRef;
