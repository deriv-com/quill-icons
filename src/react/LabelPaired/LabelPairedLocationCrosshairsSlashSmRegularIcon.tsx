import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSlashSmRegularIcon = (
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
      <path d='M11.078 14.606h-.027l.738.574a4.96 4.96 0 0 1-2.351.793v1.34q-.028.41-.438.437-.41-.027-.437-.437v-1.34Q6.62 15.78 5.28 14.469q-1.312-1.34-1.504-3.281h-1.34q-.41-.028-.437-.438.027-.41.438-.437h1.34q.054-.657.245-1.258l.739.574a4.6 4.6 0 0 0-.137 1.121q.054 1.86 1.285 3.09T9 15.125q1.12 0 2.078-.52M8.563 5.526v-1.34q.027-.41.437-.437.41.027.438.438v1.34q1.94.19 3.28 1.503 1.313 1.34 1.505 3.282h1.34q.41.027.437.437-.027.41-.437.438h-1.34a5.7 5.7 0 0 1-.246 1.257l-.739-.574q.137-.546.137-1.121-.055-1.86-1.285-3.09T9 6.375q-1.121 0-2.05.52l-.74-.575a4.95 4.95 0 0 1 2.353-.793M9 13.375q-1.065-.027-1.805-.71-.738-.685-.82-1.75l1.531 1.202q.027 0 .028.027l1.53 1.204a4 4 0 0 1-.464.027m-.437-5.223q.218-.027.437-.027 1.066.027 1.805.71.738.685.82 1.75l-1.531-1.202q-.028 0-.028-.028zM.96 3.832l16.625 13.152q.3.274.082.602-.3.3-.629.082L.414 4.543q-.3-.3-.082-.629.3-.274.629-.082' />
    </g>
    <defs>
      <clipPath id='60c0c07cdd613f67b6a4af8718ed0a00__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSlashSmRegularIcon);
export default ForwardRef;
