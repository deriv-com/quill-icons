import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from 'types';
export const LabelPairedFileCertificateSmBoldIcon = (
  { iconSize = 'md', ...props }: QuillSvgProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 14 22'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M12.25 16.438c.273-.019.42-.165.438-.438V8.125H10.5a.852.852 0 0 1-.629-.246.852.852 0 0 1-.246-.629V5.063H5.25c-.273.018-.42.164-.437.437v1.86a1.49 1.49 0 0 0-1.122 0l-.164.054c0 .018-.009.027-.027.027V5.5c.018-.492.191-.902.52-1.23.328-.329.738-.502 1.23-.52h4.54c.473 0 .883.173 1.23.52l2.46 2.46c.347.347.52.766.52 1.258V16c-.018.492-.191.902-.52 1.23-.328.329-.738.502-1.23.52H6.043c.055-.146.082-.292.082-.437v-.875zM2.98 8.18l.438.164c.055.018.11.018.164 0l.438-.164c.31-.11.565-.046.765.191l.3.383a.343.343 0 0 0 .138.082l.465.055c.31.054.492.237.546.547l.082.464c0 .055.028.11.082.164l.356.274c.237.219.31.474.219.765l-.192.438a.253.253 0 0 0 0 .164l.164.438c.11.291.046.546-.191.765l-.383.274a.347.347 0 0 0-.082.164l-.055.464c-.054.31-.237.493-.546.547l-.438.055v2.899a.428.428 0 0 1-.219.382.47.47 0 0 1-.465-.027L3.5 16.957l-1.066.711a.422.422 0 0 1-.438.027c-.164-.09-.246-.218-.246-.383v-2.898l-.437-.055c-.31-.054-.493-.237-.547-.546l-.055-.465a.347.347 0 0 0-.082-.164l-.383-.274c-.237-.219-.3-.474-.191-.765l.164-.438a.253.253 0 0 0 0-.164l-.164-.437c-.11-.292-.046-.547.191-.766l.383-.274a.347.347 0 0 0 .082-.164l.055-.464c.054-.31.246-.493.574-.547l.437-.055a.347.347 0 0 0 .164-.082l.274-.383c.219-.237.474-.3.765-.191m-1.23 3.445c.018.656.31 1.158.875 1.504.583.328 1.167.328 1.75 0 .565-.346.857-.848.875-1.504-.018-.656-.31-1.158-.875-1.504-.583-.328-1.167-.328-1.75 0-.565.346-.857.848-.875 1.504'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateSmBoldIcon);
export default ForwardRef;
