import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppStoreLgIcon = (
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
      <path d='m10 10.227-.352-.625q-.429-.586-1.093-.274-.585.43-.274 1.094l.781 1.406-2.578 4.492h-2.03q-.744.079-.821.82.078.704.82.782h7.227q.273-.547 0-1.055-.274-.507-.899-.547h-2.46l3.398-5.898q.312-.664-.274-1.094-.663-.312-1.093.274zm-3.086 8.515Q6.29 18 5.352 18.273l-.586 1.016q-.314.664.312 1.055.664.312 1.094-.274zm6.602-2.422a5 5 0 0 1-.196-.351 279 279 0 0 0-2.148-3.711q-.39.312-.586 1.055-.156.78.312 1.64.469.82 1.133 1.992.781 1.328 1.797 3.125.43.585 1.094.274.586-.39.312-1.094l-.78-1.328h1.132q.742-.078.82-.781-.078-.743-.82-.82zM10 5.813q2.696.038 4.883 1.328a9.7 9.7 0 0 1 3.476 3.476q1.29 2.187 1.328 4.883-.038 2.695-1.328 4.883a9.7 9.7 0 0 1-3.476 3.476Q12.696 25.15 10 25.187q-2.695-.038-4.883-1.328a9.7 9.7 0 0 1-3.476-3.476Q.35 18.195.313 15.5q.038-2.695 1.328-4.883a9.7 9.7 0 0 1 3.476-3.476Q7.305 5.85 10 5.813m8.438 9.687q-.08-3.594-2.461-5.977Q13.555 7.141 10 7.063q-3.594.078-5.977 2.46-2.382 2.422-2.46 5.977.078 3.594 2.46 5.977 2.422 2.382 5.977 2.46 3.594-.078 5.977-2.46 2.382-2.422 2.46-5.977' />
    </g>
    <defs>
      <clipPath id='2722ed00b40f5ca6f65b9e5a8995a234__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppStoreLgIcon);
export default ForwardRef;
