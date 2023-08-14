'use client'
import { useState, useCallback } from "react";
import CreateNewPost from "../CreateNewPost/CreateNewPost";
import PostItem from "../PostItem/PostItem";
import { StaticImageData } from "next/image";

export interface IComment {
  rootId: number
  id: number
  src?: string | StaticImageData
  userName: string
  commentContent: string
}
export interface IPost {
  id: number
  src?: string | StaticImageData
  name: string
  content: string
  like: number[]
  commentInit: IComment[]
}

const FeedList: IPost[] = [
  {
    id: 0,
    src: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/333091547_562377625648568_646318570313093486_n.jpg?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=0pCiZ4ZAMGAAX-Aok0c&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDiauRtne-HhEt5iiL19QnyR2u4tDypsUS_JZ-70D_CWQ&oe=64DF1894',
    name: 'TopDev',
    content: `
    <div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
    <div dir="auto">Việc l&agrave;m IT FRESHER | Cung cấp iMac | 100% lương thử việc | TopDev - Việc L&agrave;m IT H&agrave;ng Đầu</div>
    <div dir="auto">CƠ HỘI GỌI T&Ecirc;N IT FRESHER</div>
    <div dir="auto"><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://topdev.vn/s/RGyA2vmr?fbclid=IwAR2Y-GseMv71VkoUs9XgQLExDHN4BtXfqaVht98xyNLTxX4jt305mq1rGkQ" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/RGyA2vmr</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto"><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f44d.png" alt="👍" width="16" height="16"></span><span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t55/1.5/16/1f44d.png" alt="👍" width="16" height="16"></span> Mức lương hấp dẫn, lương th&aacute;ng 13,14 h&agrave;ng năm, cung cấp IMAC v&agrave; c&aacute;c khoản trợ cấp, thưởng hấp dẫn, c&aacute;c chuyến du lịch, nghỉ m&aacute;t, team building, loạt ph&uacute;c lợi đỉnh,...</div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">.NET Developer | 5 Nhất Nhất | Cơ hội thăng tiến cao, l&agrave;m việc trong m&ocirc;i trường văn ph&ograve;ng trẻ trung, năng động, teabreak chiều h&agrave;ng tuần</div>
    <div dir="auto">➤ <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://topdev.vn/s/atWBCCUE?fbclid=IwAR0u6Qr5i3i6aQI9Jq35z7Q8j7jm1GtFi37b1-ldP3ci3AURuxlJK9_zh-Q" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/atWBCCUE</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Game Tester | ELOFUN | Lương th&aacute;ng 13 v&agrave; c&aacute;c ng&agrave;y lễ theo quy định, 1 năm review lương 1 lần</div>
    <div dir="auto">➤ <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://topdev.vn/s/lfFdyLXB?fbclid=IwAR0nNxJoYUMUyj7DfB79UybSINxJjpowlI6-cyrpb9EhmuFq0s-fYq2ai9A" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/lfFdyLXB</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">3 .Net Developer | QISOFT | Phụ cấp ngo&agrave;i lương: Ăn trưa, gửi xe..., được tạo điều kiện để ph&aacute;t huy tối đa năng lực, nhiều cơ hội thăng tiến</div>
    <div dir="auto">➤ <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftopdev.vn%2Fs%2F5t9jdjYg%3Ffbclid%3DIwAR2F2qZUNvAsO_MO-Ys-TAyV6CK9wVYTad74lR-fc_aoVKu3Zj2kywJm4x8&amp;h=AT0lT-oCaq2pH-aUIUi3aZHfstKR8TAtXWcMYH8kDPWi9WZBDz3RZElken4YDVHJpMZ75vtm9knJa2VjYPAFy4Mragt26ev7duxtg3ZyDtE8mm7mt17975chM1y0ZPM7BqE6&amp;__tn__=-UK-R&amp;c[0]=AT21coV9SS5wuJ0SgyavxkzvNOhtA0PI9YXb8BNR7aycyTPNzazcIV_SKtKCPyw0M5yu6sD5K84ShCYlKkTNFyTtwi8dtkOfFm1snLIlBPpKXrM_MiXHoAZw0BZBwdKEWAANX2cOCEtgCqsU6L8Bg3vLDUvuwYAWul_-w94igm1xGKwu-LLHI5IlODdsrsf35azL0UgMcmljsyKT3TnAGPniJcSgEmPyMfjfxASqoFAKcMg9I7nx1r9Nd-gV8x9aa4FEFm1XahFNGXyK-tPxz5oTq0VILNMpqhP8e4_X46U4FtUwrEubJMzMkxftA7KSn0qlZFry2tqe" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/5t9jdjYg</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Java Developer | Cathay Life | Mức lương cạnh tranh tr&ecirc;n thị trường, m&ocirc;i trường l&agrave;m việc quốc tế</div>
    <div dir="auto">➤ <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftopdev.vn%2Fs%2Fn7OP7xKT%3Ffbclid%3DIwAR3E1q5e3-FN3UEjoNZXAV2NMITQCCT9FNQ6cf_IUFYjx20R19tUc9NHVV0&amp;h=AT3AuqZKXzo4Fu0hkzyy5Cz_zSSCiZW2H8sLEBixV8MWFFJCpQ88s6NBWTCJzlHVcQKViaaw5HYA6PyiGGMl59bs4BqgIFTthA2kAWcoJxEfxjpH6n-QUocKerq9Im1Ouwon&amp;__tn__=-UK-R&amp;c[0]=AT21coV9SS5wuJ0SgyavxkzvNOhtA0PI9YXb8BNR7aycyTPNzazcIV_SKtKCPyw0M5yu6sD5K84ShCYlKkTNFyTtwi8dtkOfFm1snLIlBPpKXrM_MiXHoAZw0BZBwdKEWAANX2cOCEtgCqsU6L8Bg3vLDUvuwYAWul_-w94igm1xGKwu-LLHI5IlODdsrsf35azL0UgMcmljsyKT3TnAGPniJcSgEmPyMfjfxASqoFAKcMg9I7nx1r9Nd-gV8x9aa4FEFm1XahFNGXyK-tPxz5oTq0VILNMpqhP8e4_X46U4FtUwrEubJMzMkxftA7KSn0qlZFry2tqe" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/n7OP7xKT</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Android Developer | MAPLE LABS | 100% lương trong thời gian thử việc, cung cấp iMac, c&agrave; ph&ecirc;, tr&agrave;, quầy ăn nhẹ h&agrave;ng ng&agrave;y</div>
    <div dir="auto">➤ <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftopdev.vn%2Fs%2FL32OZVzK%3Ffbclid%3DIwAR0tPLyKAuxe70PluWwThxmHe4sLlFxL91odiWsV4Zbv53RG2mDCXkbR1L4&amp;h=AT3AoFyrU2cMcEu8NEoP8tN70CSJ36sLlc1GfH0qVm91dpfJrziEgyq8-TpiX3OMIa5ijc17_H5LJR2bV6bCXqEKfgBJ7pWynkskMLsv7zqmSoDluXVTHc6_5-8I0HTnO3vp&amp;__tn__=-UK-R&amp;c[0]=AT21coV9SS5wuJ0SgyavxkzvNOhtA0PI9YXb8BNR7aycyTPNzazcIV_SKtKCPyw0M5yu6sD5K84ShCYlKkTNFyTtwi8dtkOfFm1snLIlBPpKXrM_MiXHoAZw0BZBwdKEWAANX2cOCEtgCqsU6L8Bg3vLDUvuwYAWul_-w94igm1xGKwu-LLHI5IlODdsrsf35azL0UgMcmljsyKT3TnAGPniJcSgEmPyMfjfxASqoFAKcMg9I7nx1r9Nd-gV8x9aa4FEFm1XahFNGXyK-tPxz5oTq0VILNMpqhP8e4_X46U4FtUwrEubJMzMkxftA7KSn0qlZFry2tqe" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/L32OZVzK</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Web Developer | Ehis Song &Acirc;n | Đ&agrave;o tạo c&aacute;c kh&oacute;a học phục vụ cho nhu cầu c&ocirc;ng việc, hưởng lương th&aacute;ng thứ 13, th&aacute;ng thứ 14</div>
    <div dir="auto">➤ <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1fey0fg" tabindex="0" role="link" href="https://topdev.vn/s/L32OZVzK?fbclid=IwAR1tqf61S0JznaAdkIIIev6r7or0I_w1GFV6BjHb_uiVssqoqHkzhOuTSS8" target="_blank" rel="nofollow noopener noreferrer">https://topdev.vn/s/L32OZVzK</a></div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Lựa chọn điểm đến ph&ugrave; hợp v&agrave; click APPLY CV ngay n&agrave;o bạn ơi !</div>
    <div dir="auto"><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/topdev?__eep__=6&amp;__cft__[0]=AZVHzC2u6ps3eDzfZomkhhrDuHYOT737MPYeCb3ASgxiXp7_Ky03eHK85Wfv4dvAjSswlzeoMYmcxHDdlgVAQA-OHD36M1Au_Q7i66l7O9TYsk3MmvIQq9GPx-he1XkN8ADU3m0qfY_izxdJ_IK0yHZGb_m2p52U3FgS0lj5I0BbkMjSMiysBBbIKQsXOP-b54rkRWZaL-pkRr6ZlO87d9uv3jdGOsMpptj7VQuP0KWeJntqBaJKDgmlsVMBl3x14ZccoScshzLhPub5OE6exT_xP7lp1ayG9sZQ3MWjo8IWSh3MvrAC69daABj_nmrA0TE&amp;__tn__=*NK-R">#topdev</a></div>
    <div dir="auto"><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/it_fresher?__eep__=6&amp;__cft__[0]=AZVHzC2u6ps3eDzfZomkhhrDuHYOT737MPYeCb3ASgxiXp7_Ky03eHK85Wfv4dvAjSswlzeoMYmcxHDdlgVAQA-OHD36M1Au_Q7i66l7O9TYsk3MmvIQq9GPx-he1XkN8ADU3m0qfY_izxdJ_IK0yHZGb_m2p52U3FgS0lj5I0BbkMjSMiysBBbIKQsXOP-b54rkRWZaL-pkRr6ZlO87d9uv3jdGOsMpptj7VQuP0KWeJntqBaJKDgmlsVMBl3x14ZccoScshzLhPub5OE6exT_xP7lp1ayG9sZQ3MWjo8IWSh3MvrAC69daABj_nmrA0TE&amp;__tn__=*NK-R">#it_fresher</a></div>
    </div>
    `,
    like: [0, 1],
    commentInit: [
      {
        rootId: 0,
        id: 0,
        src: 'https://picsum.photos/id/100/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
  {
    id: 1,
    src: 'https://picsum.photos/id/101/200/300',
    name: 'Phòng Trọ Quận 7, Quận 4 Giá Rẻ',
    content: `<div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
    <div dir="auto">6xxx c&oacute; ngay duplex tho&aacute;ng m&aacute;t 40 m2!!!</div>
    <div dir="auto">Đc: Nguyễn Thị Thập,Q7 ( gi&aacute;p q4, q1)</div>
    <div dir="auto">Full nội thất, an ninh, giờ giấc tự do</div>
    <div dir="auto">Gần trường RMIT, TDTU, NTTU...</div>
    <div dir="auto">To&agrave; nh&agrave; thằng m&aacute;y, hầm xe rộng</div>
    <div dir="auto">Ra v&agrave;o v&acirc;n tay</div>
    <div dir="auto">Hifriendz hỗ trợ cọc</div>
    <div dir="auto">Li&ecirc;n hệ xem ph&ograve;ng: 0384888714( Zalo/call)</div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto"><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/hifriendz?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#HiFriendz</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/chothuephong?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#chothuephong</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/phongtrochothue?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#phongtrochothue</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/hotrococ?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#hotrococ</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/chdv?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#chdv</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/duplex?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#duplex</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/chothuephongdep?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#chothuephongdep</a></div>
    <div dir="auto"><a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/chdvq7?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#chdvq7</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/canhodichvuquan7?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#canhodichvuquan7</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/canhodichvuq7?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#canhodichvuq7</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/chdvquan7?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#chdvquan7</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/ufm?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#ufm</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/tdtu?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#tdtu</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/tdt?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#tdt</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/rmit?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#rmit</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/nttu?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#nttu</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/ntt?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#ntt</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/lottemart?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#lottemart</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/lottemartquan7?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#lottemartquan7</a> <a class="x1i10hfl xjbqb8w x6umtig x1b1mbwd xaqea5y xav7gou x9f619 x1ypdohk xt0psk2 xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r xexx8yu x4uap5 x18d9i69 xkhd6sd x16tdsg8 x1hl2dhg xggy1nq x1a2a7pz xt0b8zv x1qq9wsj xo1l8bm" tabindex="0" role="link" href="https://www.facebook.com/hashtag/lottemartq7?__eep__=6&amp;__cft__[0]=AZUWrD6_hxjzjzAlskEgO71cbBkbxgHQV4rt9xWy6dFDl8LixtM9HFXxqI6agbb1w1KVI1VsQ-rac_teC9WWxNErj3HdhJbKDiHWqqXG4qQeb_ljWJrsIsC_wCK2XXodc-5EY_tm0zd1zDoqyj7SfnTR6SJcpTAMQ6SPNlYe2LMT2YQ4HkEAK0p-0P70Ms677m8&amp;__tn__=*NK-R">#lottemartq7</a></div>
    </div>`,
    like: [1],
    commentInit: [
      {
        rootId: 1,
        id: 0,
        src: 'https://picsum.photos/id/10/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      },
      {
        rootId: 1,
        id: 1,
        src: 'https://picsum.photos/id/11/200/300',
        userName: 'User name 2',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
  {
    id: 2,
    src: 'https://www.inlogo.vn/vnt_upload/File/Image/hinh_nen_clb_manchester_united_full_hd_13.jpg',
    name: 'Manchester United',
    content: `<p>Fred has officially joined Fenerbahce.</p>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Thank you for your huge commitment to the club and we wish you all the best in your next chapter <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/16/1f64f.png" alt="🙏" width="16" height="16"></span></div>
    </div>`,
    like: [1, 2, 3, 4, 5, 6, 7],
    commentInit: [
      {
        rootId: 2,
        id: 0,
        src: 'https://picsum.photos/id/20/200/300',
        userName: 'User comment name',
        commentContent: 'Fred has officially joined Fenerbahce.'
      }
    ]
  },
  {
    id: 3,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-CS4V59s-hgPt-Z11jmxPyFPvFwUIIiqug&usqp=CAU',
    name: 'Christiano Ronaldo',
    content: `<div class="xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a">
    <div dir="auto">Fred has officially joined Fenerbahce.</div>
    </div>
    <div class="x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a">
    <div dir="auto">Thank you for your huge commitment to the club and we wish you all the best in your next chapter <span class="x3nfvp2 x1j61x8r x1fcty0u xdj266r xhhsvwb xat24cr xgzva0m xxymvpz xlup9mm x1kky2od"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/td9/1.5/16/1f64f.png" alt="🙏" width="16" height="16"></span></div>
    </div>`,
    like: [],
    commentInit: [
      {
        rootId: 3,
        id: 0,
        src: 'https://picsum.photos/id/30/200/300',
        userName: 'User comment name',
        commentContent: 'I’m looking forward to play these two exciting matches and to perfom in my best condition, I am preparing with SIXPAD'
      }
    ]
  },
]

export default function Feed() {
  const [itemEditing, setMenuItemId] = useState<number | null>(null)
  const [feedList, setFeedList] = useState<IPost[]>(FeedList)

  const handleCreateNewPost = useCallback((postItem: IPost) => {
    setFeedList(prev => {
      return [postItem, ...prev]
    })
  }, [])

  const handleRemovePostItem = useCallback((postId: number) => {
    // Call API to update list post
    setTimeout(() => {
      setMenuItemId(null)
      setFeedList((prev) => prev.filter((postItem => postItem.id !== postId)))
    }, 1000)
  }, [])

  const handleEditPost = useCallback((post: IPost) => {
    setTimeout(() => {
      setFeedList(prev => {
        const listPostUpdate = [...prev]
        const index = prev.findIndex(postItem => postItem.id === post.id)
        if (index !== -1) {
          listPostUpdate[index] = { ...post }
        }
        return listPostUpdate
      })
    }, 500)
  }, [])

  const handleLikePost = useCallback((userId: number, postId: number) => {
    setTimeout(() => {
      setFeedList(prev => {
        const listPostUpdate = [...prev]
        const index = prev.findIndex(postItem => postItem.id === postId)
        if (index !== -1) {
          if (listPostUpdate[index].like.length > 0) {
            const userLikeIndex = listPostUpdate[index].like.findIndex(user => user === userId)
            userLikeIndex !== -1 ? listPostUpdate[index].like.splice(userLikeIndex, 1) : listPostUpdate[index].like.push(userId)
          } else {
            listPostUpdate[index].like.push(userId)
          }
        }
        return listPostUpdate
      })
    }, 10)
  }, [])

  const handleSubmitComment = useCallback((comment: IComment) => {
    setTimeout(() => {
      setFeedList(prev => {
        const listPostUpdate = [...prev]
        const index = prev.findIndex(postItem => postItem.id === comment.rootId)
        if (index !== -1) {
          listPostUpdate[index].commentInit.push(comment)
        }
        return listPostUpdate
      })
    }, 500)
  }, [])

  return <div className="w-post-page">
    <CreateNewPost
      postLength={feedList.length}
      onCreateNewPost={handleCreateNewPost}
    />
    {feedList.map((post, index) => {
      return <PostItem
        key={index}
        post={post}
        menuItemId={itemEditing}
        onChangeMenuItemId={(param) => setMenuItemId(param)}
        onRemovePost={postId => handleRemovePostItem(postId)}
        onUpdatePost={handleEditPost}
        onLikePost={handleLikePost}
        onSubmitComment={handleSubmitComment}
      />
    })}
  </div>
}