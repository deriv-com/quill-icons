import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramLgIcon = (
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
      <path d='M10 5.813q2.696.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883-.038 2.695-1.328 4.883a9.7 9.7 0 0 1-3.476 3.476Q12.696 25.15 10 25.187q-2.695-.038-4.883-1.328a9.7 9.7 0 0 1-3.476-3.476Q.35 18.195.313 15.5q.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476Q7.305 5.85 10 5.813m4.492 6.601v-.39a.6.6 0 0 0-.156-.274.75.75 0 0 0-.39-.117q-.195 0-.938.273-.703.234-2.656 1.055-1.407.585-5.664 2.422-.665.273-.704.547 0 .39.82.586.118 0 .235.039.352.156.781.234.43.117.703.117.47.04 1.055-.351 3.945-2.696 4.102-2.735.078-.04.195.04.078.117.04.156-.08.195-.86.898-.742.743-1.367 1.328-.39.314-.43.39l-.235.235q-.39.313-.468.625-.117.274.468.703.587.352 1.055.664.469.352 1.133.782l.312.234q.587.47 1.211.469.43.039.664-.977l.391-2.226q.235-1.328.43-2.618.195-1.328.273-2.109' />
    </g>
    <defs>
      <clipPath id='d7189b3baa4f930a98513c15130a0814__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramLgIcon);
export default ForwardRef;
