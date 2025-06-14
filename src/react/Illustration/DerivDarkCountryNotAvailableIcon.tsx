import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDarkCountryNotAvailableIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id='78e8ee8e1076d4f0dde84b0501b13923__a'
      width={20}
      height={20}
      x={2}
      y={2}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path
        fill='#fff'
        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10'
      />
    </mask>
    <g mask='url(#78e8ee8e1076d4f0dde84b0501b13923__a)'>
      <path
        fill='#242828'
        d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10'
      />
      <path
        fill='#323738'
        d='M13.574 14.473c-1.232-1.051-1.087-1.522-2.65-1.522s-2.54.366-2.144 2.545 1.563 1.197 1.453 2.87.29 2.034.546 2.435c.255.401 1.017 1.563 1.307-.07a6.97 6.97 0 0 1 1.453-3.34c.616-.814 1.272-1.866.035-2.918M9.29 10.662c.076-.837 1.418-1.709 2.325-2.104.906-.395 1.743-.546 1.632-1.232-.11-.685-.366-1.208-1.778-1.208s-.796 1.888-1.958.761.256-.837.837-1.087c.58-.25 1.162-1.307.145-1.377s-.796.436-1.598.146-1.162 1.016-1.667.836a6.8 6.8 0 0 1-1.83-1.458A10.46 10.46 0 0 0 2.58 7.687a4.92 4.92 0 0 0 1.238 2.975s.546 1.272 3.811 2.835c0 0 .616.035-.11-.691-.726-.727-1.534-1.639-.627-2.11.906-.47 1.162-.435 1.382.436.221.872.942.36 1.017-.476zm9.297 3.724a.7.7 0 0 0-.075 1.122c.342.308 1.034.709 1.255 0 .22-.71-.785-1.383-1.203-1.128zm3.946-3.428c0-.099 0-.198-.035-.302 0-.22-.058-.442-.099-.657 0-.11-.04-.22-.064-.331-.046-.215-.105-.424-.163-.633 0-.093-.052-.192-.081-.285a10 10 0 0 0-.302-.825c-.047-.116-.105-.227-.157-.337s-.145-.32-.227-.477a6 6 0 0 0-.226-.406l-.215-.355a11 11 0 0 0-.285-.43l-.168-.226a10.5 10.5 0 0 0-1.372-1.511l-.093-.087a6 6 0 0 0-.58-.46h-.03a10.5 10.5 0 0 0-2.713-1.516c-.23.482-.551.915-.947 1.273a.738.738 0 0 0 .505 1.342s-.29.29 0 1.342.779 1.284 2.214.692c.616-.256 1.086-.122 1.017.51-.146 1.343-1.162 1.285-.401 3.452.47 1.308 1.633 1.82 2.068 2.836.239.581 1.162 1.075 1.941 1.424.081-.274.151-.582.215-.837 0-.105.04-.215.064-.326.04-.209.07-.424.099-.639 0-.098 0-.203.035-.302 0-.314.046-.633.046-.953s0-.656-.046-.976'
      />
    </g>
    <path fill='#FF444F' d='M24 20a4 4 0 1 0-8 0 4 4 0 0 0 8 0' />
    <path
      fill='#fff'
      fillRule='evenodd'
      d='M20 17.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 0-5m0 2.75a.25.25 0 0 1-.25-.25v-1a.25.25 0 0 1 .25-.25.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25m-.25.5v.5h.5v-.5z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivDarkCountryNotAvailableIcon);
export default ForwardRef;
