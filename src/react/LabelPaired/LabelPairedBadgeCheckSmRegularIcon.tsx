import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const LabelPairedBadgeCheckSmRegularIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fillOpacity={0.72}
        d='M5.223 5.691v.028a.45.45 0 0 1-.52.191c-.747-.2-1.422-.027-2.023.52-.547.601-.72 1.276-.52 2.023.055.219-.018.392-.219.52-.674.364-1.03.957-1.066 1.777.036.82.401 1.422 1.094 1.805.182.11.246.273.191.492-.2.747-.027 1.422.52 2.023.601.547 1.276.72 2.023.52.219-.055.392.018.52.219.364.674.957 1.03 1.777 1.066.82-.037 1.422-.401 1.805-1.094.11-.182.273-.246.492-.191.747.2 1.422.027 2.023-.52.547-.601.72-1.276.52-2.023-.055-.219.018-.392.219-.52.674-.364 1.03-.957 1.066-1.777-.037-.82-.401-1.413-1.094-1.777a.45.45 0 0 1-.191-.52c.2-.747.027-1.422-.52-2.023-.601-.547-1.276-.72-2.023-.52-.219.055-.392-.018-.52-.219C8.413 5.017 7.82 4.661 7 4.625c-.82.036-1.413.392-1.777 1.066ZM7 3.75c1.02.036 1.814.456 2.379 1.258.966-.164 1.823.1 2.57.793.693.747.957 1.604.793 2.57.802.565 1.221 1.358 1.258 2.379-.037 1.02-.456 1.814-1.258 2.379.164.966-.1 1.823-.793 2.57-.747.693-1.604.957-2.57.793-.565.802-1.358 1.221-2.379 1.258-1.02-.037-1.814-.456-2.379-1.258-.966.164-1.823-.1-2.57-.793-.693-.747-.957-1.604-.793-2.57C.456 12.564.036 11.77 0 10.75c.036-1.02.456-1.814 1.258-2.379-.164-.966.1-1.823.793-2.57.747-.693 1.604-.957 2.57-.793C5.186 4.206 5.98 3.786 7 3.75ZM9.926 9.3l-3.5 3.5c-.2.183-.401.183-.602 0l-1.75-1.75c-.182-.2-.182-.4 0-.6.2-.183.401-.183.602 0l1.449 1.421 3.2-3.172c.2-.182.4-.182.6 0 .183.2.183.401 0 .602Z'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmRegularIcon);
export default ForwardRef;
