import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHuaweiSmIcon = (
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
      <path d='M2.902 6.484s2.817 3.391 4.895 7.903v.027l-.027.055c-.028.027-.055 0-.055 0-.766-.383-3.992-2.024-5.332-3.309 0 0-.82-.656-.903-1.75v-.273c.083-1.367 1.422-2.653 1.422-2.653m4.375 9.079v.027zs0 .027-.027.082c-.52.355-2.133 1.476-2.844 1.668-1.011.246-1.996-.575-2.597-1.614l5.386-.191s.055 0 .082.055m.055-.547s.027 0 .027.027v.055s-.027.027-.054.027H3.258s-.52 0-1.012-.219c0 0-1.121-.383-1.723-1.613 0 0-.273-.547-.273-1.34v-.027a3 3 0 0 1 .137-.957s4.593 2.433 6.945 4.047M6.84 4.352v-.028s.629-.136.875-.164c0 0 1.586 2.078.82 9.79 0 .027-.027.027-.027.054l-.028.027s-.027 0-.082-.027c-.492-.738-2.816-4.184-3.308-6.316 0 0-.11-.329-.11-.766v-.274a2.57 2.57 0 0 1 .547-1.476c.328-.41.793-.711 1.313-.82m6.043 1.64c.273.684 0 1.696 0 1.696-.465 2.105-2.79 5.55-3.309 6.316 0 0-.027.027-.082.027 0 0-.027-.027-.055-.082-.765-7.738.82-9.789.82-9.789.438.082.848.164.848.164 1.422.356 1.778 1.668 1.778 1.668m-2.106 9.543v-.027h-.027l5.414.191c-.82 1.395-1.695 1.64-2.187 1.64h-.11c-.191 0-.328-.026-.328-.026-.738-.22-2.297-1.313-2.816-1.668-.028-.028-.028-.082-.028-.082.028-.028.082-.028.082-.028m5.688-6.152c-.027 1.094-.875 1.777-.875 1.777-1.313 1.285-4.54 2.926-5.305 3.309h-.082c-.027-.055 0-.11 0-.11 2.05-4.457 4.867-7.875 4.867-7.875s1.504 1.395 1.395 2.899m1.12 1.558v.028c.411 1.23-.136 2.27-.136 2.27-.574 1.284-1.722 1.667-1.722 1.667-.52.192-.93.192-.93.192-.082.027-3.281.027-4.129.027-.027 0-.055-.055-.055-.055 0-.027.028-.082.028-.082 2.351-1.586 6.945-4.047 6.945-4.047' />
    </g>
    <defs>
      <clipPath id='8296cdd039037632149e02c0cc63a22d__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHuaweiSmIcon);
export default ForwardRef;
