import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const FlagMalawiIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path fill='#339E35' d='M0 11h24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' />
    <path fill='#CE1126' d='M24 5H0v6h24z' />
    <path fill='#000' d='M2 0h20a2 2 0 0 1 2 2v3H0V2a2 2 0 0 1 2-2' />
    <path
      fill='#CE1126'
      fillRule='evenodd'
      d='M12.022 2.31c-.121-.604-.15-1.265-.139-1.38.012-.113.078-.13.136-.13.057 0 .135.052.135.135 0 .153-.003.777-.133 1.382zm.333.015a7 7 0 0 1-.008-1.387c.023-.112.092-.126.146-.12.058.002.13.06.121.143a7 7 0 0 1-.259 1.364m.3.038c-.006-.613.086-1.275.118-1.382.031-.112.103-.12.158-.112.057.009.124.072.11.153-.03.152-.15.765-.386 1.34m.316.063c.052-.61.21-1.26.253-1.367s.115-.11.167-.098c.058.015.115.08.095.161-.046.147-.221.749-.512 1.304zm.314.092c.112-.604.33-1.24.383-1.344.054-.1.123-.1.178-.083.052.017.106.092.078.167q-.261.66-.64 1.26m.29.11c.167-.596.447-1.21.51-1.31.063-.098.132-.09.184-.066.052.02.098.098.06.172-.072.139-.36.703-.754 1.203m.288.135q.257-.661.633-1.264c.07-.092.141-.077.19-.052a.13.13 0 0 1 .06.13.1.1 0 0 1-.017.046c-.086.132-.428.673-.866 1.14m.27.158c.28-.558.671-1.122.752-1.209s.15-.066.196-.037a.127.127 0 0 1 .028.178c-.1.127-.495.636-.978 1.065zm.254.178c.334-.535.777-1.064.866-1.142.086-.08.155-.058.199-.023a.124.124 0 0 1 .008.178c-.109.118-.55.596-1.073.987m.239.199q.438-.578.973-1.07c.094-.073.158-.044.198-.01a.125.125 0 0 1 .023.142.1.1 0 0 1-.032.04c-.118.11-.604.55-1.162.898m.219.216q.49-.543 1.07-.987c.104-.067.164-.032.201.008.035.038.044.127-.028.179a9 9 0 0 1-1.244.8m.186.224q.541-.503 1.16-.906c.107-.058.164-.018.196.026.035.04.032.129-.04.175-.139.086-.7.449-1.316.705m.17.239q.585-.456 1.238-.809c.115-.049.17-.005.198.038.03.046.018.132-.057.172a9 9 0 0 1-1.381.599zm.156.276q.63-.406 1.318-.702c.118-.04.167.009.19.055.026.046.008.132-.075.167-.153.063-.777.328-1.433.48m.12.265a9 9 0 0 1 1.382-.599c.12-.028.164.023.184.072.017.046-.009.133-.092.159a9 9 0 0 1-1.473.368m-3.78-2.193a7.3 7.3 0 0 1-.28-1.364c0-.112.066-.138.121-.144.058-.003.144.043.15.124.014.153.074.774.011 1.384zm-.317.038a7.2 7.2 0 0 1-.412-1.336c-.011-.115.052-.144.107-.152.057-.009.144.029.16.11q.136.682.145 1.378m-.317.063a7.5 7.5 0 0 1-.54-1.3c-.024-.113.037-.148.091-.162.055-.011.144.017.17.098.043.147.222.748.276 1.361zm-.302.086a7.6 7.6 0 0 1-.656-1.252c-.032-.109.023-.15.075-.166.054-.018.146.005.178.08.058.144.294.731.403 1.335zm-.29.101a8 8 0 0 1-.778-1.194c-.04-.107.012-.153.064-.173a.15.15 0 0 1 .184.07c.072.137.36.704.53 1.297m-.297.144a8 8 0 0 1-.892-1.128c-.049-.1-.003-.15.046-.176a.154.154 0 0 1 .19.055c.086.132.432.67.656 1.249m-.27.155a8 8 0 0 1-.993-1.056c-.06-.098-.02-.15.028-.181.044-.029.144-.029.193.04.098.124.492.633.771 1.194zm-.25.173a8.4 8.4 0 0 1-1.092-.976c-.069-.092-.031-.144.012-.178a.16.16 0 0 1 .196.023 7.7 7.7 0 0 1 .883 1.13m-.245.201a8.6 8.6 0 0 1-1.18-.883c-.08-.086-.05-.144-.009-.181a.16.16 0 0 1 .199.008c.12.107.604.547.99 1.053zm-.213.202a9 9 0 0 1-1.258-.789c-.086-.08-.06-.138-.023-.178.035-.04.13-.06.199-.009q.583.442 1.082.979zm-.202.236a9 9 0 0 1-1.33-.685c-.094-.072-.074-.135-.043-.176.032-.043.124-.072.199-.026.138.09.7.446 1.174.887m-.181.253c-.639-.201-1.292-.506-1.393-.573-.104-.063-.086-.126-.06-.172s.115-.08.195-.04c.144.077.743.388 1.258.785m-.153.259c-.656-.153-1.332-.403-1.441-.46-.107-.058-.101-.121-.075-.167.023-.046.106-.09.19-.058.152.066.777.328 1.326.685m-.12.259a9.5 9.5 0 0 1-1.48-.351c-.115-.046-.109-.112-.092-.158.02-.05.101-.098.184-.072.162.054.806.267 1.387.581'
      clipRule='evenodd'
    />
    <path
      fill='#CE1126'
      d='M17.184 4.4c-.014-.052-.055-.104-.175-.086a9 9 0 0 0-.899.274h.814l.154-.035c.086-.024.12-.104.106-.153M14.17 3.67a2.8 2.8 0 0 0-.992-.582c-1.558-.583-3.343.091-3.99 1.5h5.654a2.8 2.8 0 0 0-.673-.918M6.819 4.406c-.015.049-.009.115.109.152l.132.03h.865c-.432-.147-.812-.24-.928-.269-.09-.017-.164.038-.178.087'
    />
    <path
      fill='#000'
      fillOpacity={0.08}
      fillRule='evenodd'
      d='M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z'
      clipRule='evenodd'
    />
  </svg>
);
const ForwardRef = forwardRef(FlagMalawiIcon);
export default ForwardRef;