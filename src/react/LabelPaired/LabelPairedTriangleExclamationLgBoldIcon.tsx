import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationLgBoldIcon = (
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
      <path d='M9.688 8.82 1.952 21.516c-.078.117-.078.195-.078.312 0 .313.234.547.547.547h15.117c.313 0 .586-.234.586-.547 0-.117-.04-.195-.117-.312L10.273 8.82A.29.29 0 0 0 10 8.625c-.156 0-.234.078-.312.195m-1.602-.976A2.25 2.25 0 0 1 10 6.75c.742 0 1.484.43 1.875 1.094l7.734 12.695c.235.39.391.82.391 1.29 0 1.327-1.094 2.421-2.46 2.421H2.421A2.434 2.434 0 0 1 0 21.828q0-.703.352-1.289zm3.164 12.031c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-.312-7.187v3.75c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.75c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938' />
    </g>
    <defs>
      <clipPath id='980de696f6652de21d61e10ca57bf8df__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationLgBoldIcon);
export default ForwardRef;
