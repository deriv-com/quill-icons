import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEyeSlashSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m.96 3.832 16.626 13.152q.3.274.082.602-.3.3-.629.082L.414 4.543q-.3-.3-.082-.629.3-.274.629-.082m15.86 7.246q-.437 1.066-1.476 2.434l-.684-.52q.957-1.285 1.34-2.242-.273-.683-.848-1.559a11.4 11.4 0 0 0-1.476-1.722 8 8 0 0 0-2.051-1.395Q10.449 5.528 9 5.5q-1.64.027-2.926.71l-.738-.573Q6.894 4.68 9 4.625q1.668.027 2.98.656 1.313.63 2.297 1.559a10.5 10.5 0 0 1 1.586 1.86q.63.956.957 1.722.11.328 0 .656M2.656 7.988l.711.547Q2.383 9.793 2 10.75q.273.683.848 1.559.6.875 1.476 1.722a8 8 0 0 0 2.051 1.395Q7.551 15.973 9 16q1.64-.027 2.926-.71l.738.573Q11.106 16.82 9 16.875q-1.668-.027-2.98-.656a8.5 8.5 0 0 1-2.27-1.559 10 10 0 0 1-1.613-1.86q-.63-.956-.93-1.722a.82.82 0 0 1 0-.656q.41-1.066 1.45-2.434M9 14.25q-1.476-.027-2.488-1.04-.985-.983-1.012-2.46 0-.273.027-.52l.848.684q.082 1.04.82 1.75.738.684 1.805.711.218 0 .465-.027l.82.656A3.4 3.4 0 0 1 9 14.25m3.5-3.5q0 .273-.027.52l-.848-.684a2.64 2.64 0 0 0-.82-1.75Q10.067 8.152 9 8.125q-.22 0-.437.055l-.848-.684Q8.316 7.25 9 7.25q1.476.027 2.488 1.012.985 1.011 1.012 2.488' />
    </g>
    <defs>
      <clipPath id='f2039661a00a34fca64720cc5618475f__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEyeSlashSmRegularIcon);
export default ForwardRef;
